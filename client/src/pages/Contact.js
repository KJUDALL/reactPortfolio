//Step 3. Add structure and placeholder text htmlFor now. Provides a framework  
import React, { useState } from 'react';


function Contact() {

    //create variables for validation of values and inputs
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    //fx for email validation using regex
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    //form submission handler 
    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccessMessage;

        //validation checks of name, email and message
        if (!fullName || !email || !message) {
            setErrorMessage("Please fill in all three fields.");
        } else if (!isValidEmail(email)) {
            setErrorMessage("Please provide a valid email address.");
        } else if (!message) {
            setErrorMessage("Message is required.");
        } else {
            setErrorMessage('');
            setSuccessMessage("Thank you for contacting me! I will be happy to respond to any further questions about my application.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Name:</label><br />
            <input
                type='text'
                id='fullname'
                name='fullname'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder='Add your name here'></input>
            <br />
            <label htmlFor='email'>Email Address:</label>
            <br />
            <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Add your email here'></input>
            <br />
            <label htmlFor='message'>Message:</label>
            <br />
            <textarea
                id='message'
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Leave any suggestions or comments here'></textarea>
            < br />
            {/* error message display */}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            {/* success message display */}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

            <input type='submit' placeholder='Submit'></input>
    </form>
);
}

export default Contact;