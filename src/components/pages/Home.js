import React, { useState, useEffect  } from 'react';
import Item from '../Layout/Item';
// import data from "../../Data/db.json";
import firedb from '../../Data/firebase';
import { onValue, ref } from '@firebase/database';

function Home() {
    const [Jobs, setJobs] = useState([]);

    useEffect(() => {
        const database = ref(firedb, "Jobs");
        onValue(database, (snapshot) => {
            setJobs(snapshot.val());
        })
    }, []);
    
    return (
        <div id="home">
            <div id="home-bg-cover">
                <div className="overlay">
                    <div className="overlay-text">
                        <h1>Construction Jobs Finder</h1>
                        <h2>Convenient Construction job search</h2>
                    </div>
                </div>
            </div>
            <div>
                <div id="jobs-container">
                    <div id="heading-container">
                        <h1>Current Jobs</h1>
                    </div>
                    { Jobs && <Item jobs={ Jobs } /> }
                </div>
            </div>
        </div>
    );
}

export default Home;