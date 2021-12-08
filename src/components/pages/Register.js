import React, { useState } from "react";
import firedb from "../../Data/firebase";
import { ref, set, child } from '@firebase/database';

const Register = () => {
    
    const [showField, setShowField] = useState(false); 
    const [Form, setForm] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            position: ""
        }
    )

    const inputHandler = (e) => {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function getRandomString() {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for ( var i = 0; i < 10; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }

    const submitHandler = () => {
        console.log(Form);

        const database = ref(firedb, "Forms");
        const subDatabase = child(database, getRandomString());
        set(subDatabase, {
            firstName : Form.firstName,
            lastName : Form.lastName,
            email : Form.email,
            phoneNumber : Form.phoneNumber,
            position : Form.position
        })
    }

    const resetInput = () => {
        setForm({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            position: ""
        });
    }

    const actions = () => {
        submitHandler();
        resetInput();
        setShowField(!false);
    }

    return (
        <div id="Register">
            {
                showField?
                    <div id="show">
                        <h1>Thanks for Applying</h1>
                    </div>
                :
                    <div id="register-wraper">

                        <h1>Fill out your details</h1>
                        <label>
                            First Name
                            <input className="input-field" type="text" value={Form.firstName} onChange={inputHandler} name="firstName" />
                        </label>
                        <label>
                            Last Name
                            <input className="input-field" type="text" value={Form.lastName} onChange={inputHandler} name="lastName" />
                        </label>
                        <label>
                            Email
                            <input className="input-field" type="email" value={Form.email} onChange={inputHandler} name="email" />
                        </label>
                        <label>
                            Phone Number
                            <input className="input-field" type="text" value={Form.phoneNumber} onChange={inputHandler} name="phoneNumber"/>
                        </label>
                        <label>
                            Position
                            <input className="input-field" type="text" value={Form.position} onChange={inputHandler} name="position"/>
                        </label>

                        <input className="submit-button" type="submit" value="Apply" onClick={ actions } />
                    </div>
            }
            
        </div>
    )
}

export default Register;