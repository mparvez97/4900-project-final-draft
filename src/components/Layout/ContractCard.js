import React from "react";

function ContractCard({ contract }) {
    return (
        <div id="list-items">
            { Object.keys(contract).map((id, index) => (
                <div key={id} className="item-full">
                    <div>
                        <h3>Work Scope: {contract[id].workScope}</h3>
                        <h3>Permit { contract[id].permit}</h3>
                        <h3>Fee:  {contract[id].fee}</h3>
                        <h3>Materials:  {contract[id].materials}</h3>
                        <h3>Termination: {contract[id].termination}</h3>
                        <h3>Date: {contract[id].date}</h3>
                    </div>
                </div>
            )) }
        </div>
    )
}

export default ContractCard;