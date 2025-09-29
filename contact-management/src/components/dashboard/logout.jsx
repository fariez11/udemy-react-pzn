import { useEffectOnce, useLocalStorage } from "react-use";
import { userLogout } from "../../lib/api/userApi";
import { dangerAlert, successAlert } from "../../lib/alert/alert";
import { useNavigate } from "react-router";

export default function  Logout(){
    const [token, setToken] = useLocalStorage('token','')
    const navigate = useNavigate()

    async function handleLogout(){

        const response = await userLogout(token)
        const responseBody = await response.json()

        console.log(token);
        console.log(response);
        
        if(response.status === 200){
            setToken("")
            await successAlert('user logout successfully')
            await navigate({ pathname: '/' })
        }else{
            await dangerAlert(responseBody.errors)
        }

    }

    useEffectOnce(() => {
        handleLogout().then(() => console.log('user logout successfully'))
    })

}