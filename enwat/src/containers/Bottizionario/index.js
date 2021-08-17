import {React, useState, useEffect} from 'react';


import LayoutBottizionario from '../../layout/Bottizionario'

import {firestore} from '../../helpers/firebase'

const BottizionarioContainer = () =>{

    const [entries, setEntries] = useState([]);

    const fetchEntries = async () =>{
        let result = await firestore.collection("Bottizionario").orderBy("botti").get();

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
        <div>
            <div style={{display: 'flex', justifyContent: 'center', paddingBottom:"2rem", paddingLeft:"2rem", paddingRight: "2rem"}} >
                <h1>Bottizionario</h1>
            </div>
            <LayoutBottizionario list={entries}/>
        </div>
    );
}

export default BottizionarioContainer;