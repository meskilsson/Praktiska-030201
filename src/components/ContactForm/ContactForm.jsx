import { useState } from "react"
import Button from "../Buttons/Button";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulär data', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ditt namn"
            />
            <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Din email"
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Ditt meddelande"
            />
            <Button
                type="submit">Skicka!</Button>
        </form>
    )
}

export default ContactForm;