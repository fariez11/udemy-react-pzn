import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router";
import { userSession } from "../../lib/api/userApi";
import { useInterval, useLocalStorage } from "react-use";
import { dangerAlert } from "../../lib/alert/alert";

export default function DashboardLayout() {

    const [name, setName] = useState('')
    const [token, _] = useLocalStorage('token', '')
    const navigate = useNavigate()

    async function getUserSession() {
        const response = await userSession(token)
        const responseBody = await response.json()

        if (response.status === 200) {
            setName(responseBody.data.name)
        } else {
            await dangerAlert('your login session has expired')
            await navigate({ pathname: '/' })
        }
    }

    useEffect(() => {
        getUserSession()
    }, [location.pathname]);


    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex flex-col">
            <header className="bg-gradient shadow-lg">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link to="/dashboard/contact" className="flex items-center hover:opacity-90 transition-opacity duration-200">
                        <i className="fas fa-address-book text-white text-2xl mr-3" />
                        <div className="text-white font-bold text-xl">Contact Management</div>
                    </Link>
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <Link to="/dashboard/profile" className="text-gray-100 hover:text-white flex items-center transition-colors duration-200">
                                    <i className="fas fa-user-circle mr-2" />
                                    <span>{name ? name : 'profile'}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/logout" className="text-gray-100 hover:text-white flex items-center transition-colors duration-200">
                                    <i className="fas fa-sign-out-alt mr-2" />
                                    <span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="container mx-auto px-4 py-8 flex-grow">

                <Outlet />

                <div className="mt-10 mb-6 text-center text-gray-400 text-sm animate-fade-in">
                    <p>© 2025 Contact Management. All rights reserved.</p>
                </div>
            </main>
        </div>

    )
}