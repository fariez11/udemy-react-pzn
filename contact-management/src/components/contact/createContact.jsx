import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { contactCreate } from "../../lib/api/contactApi";
import { dangerAlert, successAlert } from "../../lib/alert/alert";
import { useLocalStorage } from "react-use";
import FormContact from "./formContact";

export default function CreateContact() {

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [token,_] = useLocalStorage('token',"")

    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()

        const response = await contactCreate(token, {first_name, last_name, email, phone})
        const responseBody = await response.json()

        if(response.status === 200){
            await successAlert('Contact Created Successfully')
            navigate({pathname : '/dashboard/contact'})
        }else{
            await dangerAlert(responseBody.errors)
        }
    }

    return (
        <FormContact 
            title="Create New Contact"
            first_name={first_name}
            last_name={last_name}
            email={email}
            phone={phone}
            onFirstNameChange={(e) => setFirstName(e.target.value)}
            onLastNameChange={(e) => setLastName(e.target.value)}
            onEmailChange={(e) => setEmail(e.target.value)}
            onPhoneChange={(e) => setPhone(e.target.value)}
            onSubmit={handleSubmit}
        />
        
    )
}