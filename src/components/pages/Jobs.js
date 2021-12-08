import React from "react";
import data from "../../Data/db.json";
import Item from "../Layout/Item";

const Jobs = () => {
    return (
        <div id="jobs-container">
            <div id="heading-container">
                <h1>Jobs</h1>
            </div>
            { <Item jobs={ data.Jobs } /> }
        </div>
    );
}

export default Jobs;
