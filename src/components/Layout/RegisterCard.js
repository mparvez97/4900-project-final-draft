import React from "react";

function RegisterCard({ form }) {
    // Object.keys(form).map((fora, index)=>{

    //     console.log(fora)
    // })
    return (
        <div id="list-items">
            { Object.keys(form).map((id, index) => (
                <div key={id} className="item-full">
                    <div>
                        <h3>First Name: {form[id].firstName}</h3>
                        <h3>Last Name: { form[id].lastName}</h3>
                        <h3>Email: {form[id].email}</h3>
                        <h3>Phone Number: {form[id].phoneNumber}</h3>
                        <h3>Position: {form[id].position}</h3>  
                    </div>
                </div>
            )) }
        </div>
    )
}

export default RegisterCard;