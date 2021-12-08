import React, { useState } from "react";
import firedb from "../../Data/firebase";
import { ref, set, child } from '@firebase/database';

const Contract = () => {
    const [showField, setShowField] = useState(false);
    const [Form, setForm] = useState(
        {
            workScope: "",
            permit: "",
            fee: "",
            materials: "",
            termination: "",
            signature: "",
            date: ""    
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

        const database = ref(firedb, "Contracts");
        const subDatabase = child(database, getRandomString());
        set(subDatabase, {
            workScope : Form.workScope,
            permit : Form.permit,
            fee : Form.fee,
            materials : Form.materials,
            termination : Form.termination,
            signature: Form.signature,
            date: Form.date
        })
    }

    const resetInput = () => {
        setForm({
            workScope: "",
            permit: "",
            fee: "",
            materials: "",
            termination: "",
            signature: "",
            date: "" 
        });
    }

    const actions = () => {
        submitHandler();
        resetInput();
        setShowField(!false);
    }

    return (
        <div id="Contract">
            {
                showField?
                    <div id="show">
                        <h1>Submited.</h1>
                    </div>
                :
                    <div id="contract-wraper">

                        <h1>Contract</h1>
                        <label>
                            Work Scope
                            <input className="input-field" type="text" value={Form.workScope} onChange={inputHandler} name="workScope" />
                        </label>
                        <label>
                            Permit
                            <input className="input-field" type="text" value={Form.permit} onChange={inputHandler} name="permit" />
                        </label>
                        <label>
                            Fees
                            <input className="input-field" type="email" value={Form.fee} onChange={inputHandler} name="fee" />
                        </label>
                        <label>
                            Materials
                            <input className="input-field" type="text" value={ Form.materials } onChange={inputHandler} name="materials" />
                        </label>
                        <label>
                            Termination
                            <input className="input-field" type="text" value={ Form.termination } onChange={inputHandler} name="termination" />
                        </label>
                        <label>
                            Signature
                            <input className="input-field" type="text" value={ Form.signature } onChange={inputHandler} name="signature" />
                        </label>
                        <label>
                            Date of contract
                            <input className="input-field" type="text" value={ Form.date } onChange={inputHandler} name="date" />
                        </label>
                        <div className="terms">
                            <input type="checkbox" />
                            <h4>Terms and Conditions</h4>
                        </div>

                        <div className="button-wraper">
                            <input className="submit-button" type="submit" value="Submit" onClick={ actions } />
                        </div>
                    </div>
            }
            
        </div>
    )
}

export default Contract;
