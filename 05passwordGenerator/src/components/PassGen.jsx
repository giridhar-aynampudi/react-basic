import { useState, useEffect } from "react";

function PassGen() {
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        hasLowerCase: false,
        hasUpperCase: false,
        hasNumber: false,
        hasSpecialChar: false
    });
    const [touched, setTouched] = useState(false);

    useEffect(() => {
        checkValidation();
        setErrors(checkValidation(password) || {});
    }, [password]);

    const checkValidation = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

        return {
            hasLowerCase: hasLowerCase,
            hasUpperCase: hasUpperCase,
            hasNumber: hasNumber,
            hasSpecialChar: hasSpecialChar
        }
        
        // return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    }
    const handleInputChange = (event) => {
        setPassword(event.target.value);
        setTouched(true);
    }

    return (
        <div>
            <label>Password Length: </label>
            <input type='text' value={password} onChange={handleInputChange}/>
            <div style={{ marginTop: '10px' }}>
                {touched && !errors.hasUpperCase && <p style={{ color: 'red' }}>Password must contain at least one uppercase letter.</p>}
                {touched && !errors.hasLowerCase && <p style={{ color: 'red' }}>Password must contain at least one lowercase letter.</p>}
                {touched && !errors.hasNumber && <p style={{ color: 'red' }}>Password must contain at least one number.</p>}
                {touched && !errors.hasSpecialChar && <p style={{ color: 'red' }}>Password must contain at least one special character.</p>}
            </div>
        </div>
    )
}

export default PassGen;