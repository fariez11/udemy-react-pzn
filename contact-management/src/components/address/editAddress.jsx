import { Link, useNavigate, useParams } from "react-router"
import { useEffectOnce, useLocalStorage } from "react-use";
import { addressDetail, addressUpdate } from "../../lib/api/addressApi";
import { useState } from "react";
import { contactDetail } from "../../lib/api/contactApi";
import { dangerAlert, successAlert } from "../../lib/alert/alert";
import FormAddress from "./formAddress";

export default function EditAddress() {

    const navigate = useNavigate()
    const { id, addressId } = useParams()
    const [token, _] = useLocalStorage('token', '')
    const [contact, setContact] = useState({})
    // const [street, setStreet] = useState('')
    // const [city, setCity] = useState('')
    // const [province, setProvince] = useState('')
    // const [country, setCountry] = useState('')
    // const [postal_code, setPostalCode] = useState('')


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

    // async function fetchDetailAddress() {
    //     const response = await addressDetail(token, id, addressId)
    //     const responseBody = await response.json()

    //     if (response.status === 200) {
    //         setStreet(responseBody.data.street)
    //         setCity(responseBody.data.city)
    //         setProvince(responseBody.data.province)
    //         setCountry(responseBody.data.country)
    //         setPostalCode(responseBody.data.postal_code)
    //     } else {
    //         dangerAlert(responseBody.errors)
    //     }
    // }

     async function fetchData() {
        const [contactResponse, addressResponse] = await Promise.all([
            contactDetail(token, id),
            addressDetail(token, id, addressId)
        ]);

        const contactBody = await contactResponse.json();
        const addressBody = await addressResponse.json();

        if (contactResponse.status === 200) {
            setContact(contactBody.data);
        }

        if (addressResponse.status === 200) {
            setFormData(addressBody.data);
        }
    }

    useEffectOnce(() => {
        fetchData()
    })

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await addressUpdate(token, id, addressId, formData)
        const responseBody = await response.json()

        if (response.status === 200) {
            successAlert('Address Updated Successfully')
            await navigate(-1)
        } else {
            dangerAlert(responseBody.errors)
        }
    }


    return (
        <FormAddress
            title="Edit Address"
            contact={contact}
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            iconButton="fa-check-circle"
            textButton="Save Changes"
        />
    )
}