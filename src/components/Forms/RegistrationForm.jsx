import { useState } from "react";
import './forms.css';

function RegistrationForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

    const validateEmail = (value) => {
        if (!value) return 'E-post krävs';
        if (!value.includes('@')) return 'Ogiltlig e-postadress';
        return;
    }

    const validatePassword = (value) => {
        if (!value) return 'Lösenord krävs';
        if (!passwordRegex.test(value)) return 'Lösenordet måste vara minst 8 tecken och innehålla en siffra och ett specialtecken';
        return null;
    }

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setErrors(prev => ({ ...prev, email: validateEmail(value) }));
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setErrors(prev => ({ ...prev, password: validatePassword(value) }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        if (emailError || passwordError) {
            setErrors({ email: emailError, password: passwordError });
            return;
        }
        console.log('Formulär skickat!', { email, password });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="E-post"
                />
                {errors.email && <span className="error">
                    {errors.email}
                </span>}
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Lösenord"
                />
                {errors.password && <span className="error">
                    {errors.password}</span>}
                <button type="submit">Registrera</button>
            </div>
        </form>
    );
}

export default RegistrationForm;