import React, {useState, useEffect} from 'react';


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
            <LayoutCitazioni entries={entries}/>
        </>
    )

}

export default CitazioniContainer;