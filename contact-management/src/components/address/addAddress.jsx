import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router"
import { useEffectOnce, useLocalStorage } from "react-use"
import { contactDetail } from "../../lib/api/contactApi"
import { addressAdd } from "../../lib/api/addressApi"
import { dangerAlert, successAlert } from "../../lib/alert/alert"
import FormAddress from "./formAddress"

export default function AddAddress() {

    const { id } = useParams()
    const [token, _] = useLocalStorage('token', '')
    const navigate = useNavigate()
    const [contact, setContact] = useState({})

    const [formData, setFormData] = useState({
        street: '',
        city: '',
        province: '',
        country: '',
        postal_code: ''
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        
    }

    async function fetchDetailContact() {
        const response = await contactDetail(token, id)
        const responseBody = await response.json()

        if (response.status === 200) {
            setContact(responseBody.data)
        } else {
            dangerAlert(responseBody.errors)
        }
    }

    useEffectOnce(() => {
        fetchDetailContact()
    })

    async function handleSubmit(e) {
        e.preventDefault()


        const response = await addressAdd(token, id, formData)
        const responseBody = await response.json()

        if (response.status === 200) {
            successAlert('Address Added Successfully')
            await navigate(-1)
        } else {
            dangerAlert(responseBody.errors)
        }
    }

    return (
        <FormAddress
            title="Add New Address"
            contact={contact}
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            iconButton="fa-plus-circle"
            textButton="Add Address"
        />
    )
}