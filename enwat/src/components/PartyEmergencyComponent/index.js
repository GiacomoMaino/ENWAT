import React, {useState, useEffect} from 'react'
import { firestore, firebase } from '../../helpers/firebase'
import PartyCard from '../PartyCard';

const PartyEmergencyComponent = () => {

    const [parties, setParties] = useState([])

    const folder = firestore.collection("Feste");


    var today = new Date();
    today.setMinutes(0)
    today.setHours(0)
    today.setMilliseconds(0)

    const date = firebase.firestore.Timestamp.fromDate(today)


    useEffect(() => {
        setParties([]);
        folder.where("date", ">=", date).get().then((docs) =>{

            docs.forEach((doc) =>{
                console.log(doc.data());
                setParties(result => [...result, doc.data()])
            })
        }).catch((error)=>{
            alert(error)
        })
        
        console.log(parties);

    }, [])

    return(
        <>
            <PartyCard parties={parties}/>
        </>
    )
}

export default PartyEmergencyComponent;