import React from "react";
import { Link } from "react-router-dom";
import { SiGooglemaps } from "react-icons/si";
import { RiBuilding4Fill } from "react-icons/ri"
import { MdWork } from "react-icons/md";

const Item = ({ jobs }) => {
    return (
        <div id="list-items">
            { jobs.map((job, index) => (
                <div key={job.id} className="item-full">
                    <div>
                        <h1><MdWork /> {job.title}</h1>
                        <h3><RiBuilding4Fill /> {job.company}</h3>
                        <h3><SiGooglemaps /> {job.location}</h3>
                    </div>
                    <div className="details">
                        <button className="apply-btn"><Link to="/Register">Apply</Link></button>
                        <button className="more-btn">
                            <Link to={{ pathname: `/Details/${job.id}`, state: {} }}>More Details</Link>
                        </button>
                    </div>
                </div>
            )) }
        </div>
    );
}

export default Item;
