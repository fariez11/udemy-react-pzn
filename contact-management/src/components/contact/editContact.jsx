import { useState } from "react";
import { Form, Link, useNavigate, useParams } from "react-router";
import { contactDetail, contactUpdate } from "../../lib/api/contactApi";
import { useEffectOnce, useLocalStorage } from "react-use";
import { dangerAlert, successAlert } from "../../lib/alert/alert";
import FormContact from "./formContact";

export default function EditContract() {

    const {id} = useParams()
    const [token, _] = useLocalStorage('token','')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate()

    async function fetchDetailContact(){
        const response = await contactDetail(token, id)
        const responseBody = await response.json()

        if(response.status === 200){
            setFirstName(responseBody.data.first_name)
            setLastName(responseBody.data.last_name)
            setEmail(responseBody.data.email)
            setPhone(responseBody.data.phone)
        }else{
            await dangerAlert(responseBody.errors)
        }
    }

    useEffectOnce(() => {
        fetchDetailContact()
    })

    async function handleUpdateContact(e){
        e.preventDefault()

        const response = await contactUpdate(token, id, {first_name, last_name, email, phone})
        const responseBody = await response.json()

        if(response.status === 200){
            await successAlert('Contact Updated Successfuylly')
            await navigate({pathname: '/dashboard/contact'})
        }else{
            await dangerAlert(responseBody.errors)
        }
    }
    
    return (
        <FormContact
            title="Edit Contact"
            first_name={first_name}
            last_name={last_name}
            email={email}
            phone={phone}
            onFirstNameChange={(e) => setFirstName(e.target.value)}
            onLastNameChange={(e) => setLastName(e.target.value)}
            onEmailChange={(e) => setEmail(e.target.value)}
            onPhoneChange={(e) => setPhone(e.target.value)}
            onSubmit={handleUpdateContact}
        />
    )
}