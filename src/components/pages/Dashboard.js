import React from "react";
import RegisterCard from "../Layout/RegisterCard";
import firedb from "../../Data/firebase";
import { onValue, ref } from '@firebase/database';
import { useState, useEffect } from 'react';
import ContractCard from "../Layout/ContractCard";


function Dashboard() {
    const [Form, setForm] = useState([]);
    const [Contracts, setContracts] = useState([])

  useEffect(() => {
        const database = ref(firedb, "Forms");

        const order = orderByChild("id");
        const limit = limitToLast(25);
        const data = query(database, order, limit);

        onValue(data, (snapshot) => {
            setForm(snapshot.val());
        })
    }, []);
    useEffect(() => {
        const database = ref(firedb, "Contracts");
        const order = orderByChild("id");
        const limit = limitToLast(6);
        const data = query(database, order, limit);

        onValue(data, (snapshot) => {
            setContracts(snapshot.val());
        })
    }, []);
    
    return (
        <div>
            <div id="jobs-container">
                <div id="heading-container">
                    <h1>Current Register Form</h1>
                </div>
                { Form && <RegisterCard form={ Form } /> }
            </div>
            <div id="jobs-container">
                <div id="heading-container">
                    <h1>Current Contracts</h1>
                </div>
                { Contracts && <ContractCard contract={ Contracts } /> }
            </div>
        </div>
    )
}

export default Dashboard;
