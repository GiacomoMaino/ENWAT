import React, {useState, useRef} from 'react'
import { auth } from '../../helpers/firebase'

import {isValidEmail, isValidPassword} from "../../utils/isValid"
import LoginForm from '../LoginForm'
import useForm from "../../containers/Login/useForm";

import './index.css'

const AccountComponent = ({userData, user, onUserDataModified: {onCellphoneChangeObserver, onUserNameChangeObserver}}) => {
   const form = useForm()

   const newForm = form;

   const [email, setEmail] =  useState(user.email)
   const [cellphone, setCellphone] =  useState(userData.cellphone)
   const [password, setPassword] =  useState("")
   const [verifyPassword, setVerifyPassword] =  useState("")
   const [mustBeRelogged, setMustBeRelogged] = useState(false)
   const [userName, setUserName] = useState(userData.username)
   const prevNeedsLogIn = useRef(false)

   const onUserNameChange = (e) => {
      setUserName(e.target.value);
   }

   const onEmailChange = (e) => {
      setEmail(e.target.value);
   }

   const onCellphoneChange = (e) => {
      setCellphone(e.target.value);
   }

   const onPasswordChange = (e) => {
      setPassword(e.target.value);
   }

   const onVerifyPasswordChange = (e) => {
      setVerifyPassword(e.target.value);
   }

   newForm.onSubmit = () => {
      if(prevNeedsLogIn.value && mustBeRelogged){
         form.onSubmit();
      }
      setMustBeRelogged(false);

   };

   const modifyInformation = (e) =>{
      if(email != auth.currentUser.email && isValidEmail(email))
         {
         auth.currentUser.verifyBeforeUpdateEmail(email).then(()=> {
            prevNeedsLogIn.current = false;
        }).catch((error)=>{
            setMustBeRelogged(true);
            prevNeedsLogIn.current = true
        })
         
      }
      if(isValidPassword(password) && password == verifyPassword)
      {
         auth.currentUser.updatePassword(password);
      }
      else{
         if(password != verifyPassword)
            alert("Le due password devono essere uguali")
      }

      if(cellphone != "" && cellphone != userData.cellphone)
      {
         onCellphoneChangeObserver(cellphone);
      }

      if(userName != "" && userName != userData.username)
      {
         onUserNameChangeObserver(userName);
      }

      alert("Modifiche effettuate");
   }

    return(
       <>
         { mustBeRelogged ? (<div className={"reLogin"}>
            <LoginForm form={newForm}/>
         </div>
         ) : 
         (
           <div className={"account"}>
            <div className={"wrapper"}>
         <div className={"title"}>
            {/*<img src={NaN}/>*/}
            {userData.username}
         </div>
         <form>
         <div className={"field"}>
               <input type="text" value={userName} required name="username" onChange={onUserNameChange}/>
               <label>Nome utente</label>
            </div>
            <div className={"field"}>
               <input type="text" value={email} required name="username" onChange={onEmailChange}/>
               <label>Indirizzo Email</label>
            </div>
            <div style={{display:"flex"}}>
            <div className={"field"}>
               <input type="password" value={password} required name="username" onChange={onPasswordChange}/>
               <label>Password</label>
            </div>
            <div className={"field"}>
               <input type="password" value={verifyPassword} required name="username" onChange={onVerifyPasswordChange}/>
               <label>Conferma Password</label>
            </div>
            </div>
            <div className={"field"}>
               <input type="text" value={cellphone} required name="username" onChange={onCellphoneChange}/>
               <label>Numero di telefono</label>
            </div>
            
            <div className={"field"}>
               <input type="button" value="Modifica" onClick={modifyInformation} />
            </div>
         </form>
         </div>
         </div>)
      }
      </>
    )
}

export default AccountComponent;