import React, {useState, useEffect} from 'react';

import AppHeader from '../../components/Header'
import LayoutCitazioni from '../../layout/Citazioni'

import {firestore} from '../../helpers/firebase'


const CitazioniContainer = () =>{

    const [entries, setEntries] = useState([]);

    const fetchEntries = async () =>{
        let result = await firestore.collection("Citazioni").get();
        return result.docs;
    }

    const loadEntries = async () => {
        const result = await fetchEntries();

        const data = [];

        result.forEach((document) => {
            data.push(document.data());
        });


        setEntries(data);

    }

    useEffect(() => {
        loadEntries();
    }, []);

    return(
        <>
            <AppHeader />
            <div style={{display: 'flex', justifyContent: 'center', paddingBottom:"2rem", paddingLeft:"2rem", paddingRight: "2rem"}} >
                <h1>Frasi celebri</h1>
            </div>
            <LayoutCitazioni entries={entries}/>
        </>
    )

}

export default CitazioniContainer;