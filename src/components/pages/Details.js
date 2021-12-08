import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { SiGooglemaps } from "react-icons/si";
import { RiBuilding4Fill } from "react-icons/ri"
import { MdWork } from "react-icons/md";
import { FaPhoneAlt, FaMapSigns } from "react-icons/fa";
// import data from "../../Data/db.json";
import { onValue, ref } from '@firebase/database';
import { useState, useEffect } from 'react';
import firedb from '../../Data/firebase';


const Details = ({ match }) => {
    const [Jobs, setJobs] = useState([]);

    useEffect(() => {
        const database = ref(firedb, "Jobs");
        onValue(database, (snapshot) => {
            setJobs(snapshot.val());
        })
    }, []);

    let params = useParams();
    let id = Number(params.id);

    return (
        <div >
            { Jobs.map((job, index) => ( id === job.id ? 
                <div key={job.id} className="job-details-container">
                    <div className="job-details">
                        <h2><MdWork /> { job.title }</h2>
                        <h3><RiBuilding4Fill /> { job.company }</h3>
                        <h3><SiGooglemaps /> { job.location }</h3>
                        <p> { job.discription } </p>
                    </div> 
                    <div className="contact-info">
                        <h1>Contact Info</h1>
                        <h3><FaPhoneAlt /> { job.contact }</h3>
                        <h3><FaMapSigns /> { job.address }</h3>
                        <button><Link to="/Contract">Contract</Link></button>
                        <button><Link to="/Register">Apply</Link></button>
                    </div>
                </div> 
            : null ))}
        </div>
    );
}

export default Details;
