// import { useState } from "react"
import { useImmer } from 'use-immer'

const initialData = {
    name: "",
    message: ""
}

export default function ContactForm() {
    // sebelum menggunakan immer
    // const [contact, setContact] = useState(initialData)

    // setelah menggunakan immer
    const [contact, setContact] = useImmer(initialData)

    function handleNameChange(e) {
        // sebelum menggunakan immer
        // setContact({ ...contact, name: e.target.value })

        // setelah menggunakan immer
        setContact(draft => { draft.name = e.target.value })
    }

    function handleMessageChange(e) {
        // sebelum menggunakan immer
        // setContact({ ...contact, message: e.target.value })

        // setelah menggunakan immer
        setContact(draft => { draft.message = e.target.value })
    }

    return (
        <div className="container text-center" style={{ marginTop: "5rem" }}>
            <header className="fixed-top">
                <h1 className="fw-bold" style={{ backgroundColor: "#E2E3E5", padding: "0.5rem" }}>Belajar ReactJS</h1>
            </header>
            <div className="row">
                <div className="col">
                    <h3 className="mb-3">contact form</h3>
                    <form>
                        <input className="form-control mb-1" type="text" placeholder="name" value={contact.name} onChange={handleNameChange} />
                        <input className="form-control" type="text" placeholder="message" value={contact.message} onChange={handleMessageChange} />
                    </form>
                </div>
                <div className="col">
                    <h3 className="mb-3">contact detail</h3>
                    <h4 className="mt-1 text-start">Name : {contact.name}</h4>
                    <h4 className="mt-1 text-start">Message : {contact.message}</h4>
                </div>
            </div>
        </div>
    )
}