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
            <LayoutBottizionario list={entries}/>
        </div>
    );
}

export default BottizionarioContainer;