import React, {useState, useRef} from 'react'
import { auth } from '../../helpers/firebase'

import {isValidEmail, isValidPassword} from "../../utils/isValid"
import LoginForm from '../LoginForm'
import useForm from "../../containers/Login/useForm";

import './index.css'

const AccountComponent = ({userAvatar, username, user}) => {
   const form = useForm()

   const newForm = form;

   const [email, setEmail] =  useState(user.email)
   const [cellphone, setCellphone] =  useState("")
   const [password, setPassword] =  useState("")
   const [mustBeRelogged, setMustBeRelogged] = useState(false)
   const prevNeedsLogIn = useRef(false)

   const onEmailChange = (e) => {
      setEmail(e.target.value);
   }

   const onCellphoneChange = (e) => {
      setCellphone(e.target.value);
   }

   const onPasswordChange = (e) => {
      setPassword(e.target.value);
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
      if(isValidPassword(password) && false)
      {
         auth.currentUser.updatePassword(password);
      }

      if(cellphone != "")
      {
         auth.currentUser.updatePhoneNumber(cellphone).catch(() => {
            console.log("telefono cambiato");
         })
      }
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
            <img src={userAvatar}/>
            {username}
         </div>
         <form>
            <div className={"field"}>
               <input type="text" value={email} required name="username" onChange={onEmailChange}/>
               <label>Indirizzo Email</label>
            </div>
            <div style={{display:"flex"}}>
            <div className={"field"}>
               <input type="text" value={password} required name="username" onChange={onPasswordChange}/>
               <label>Password</label>
            </div>
            <div className={"field"}>
               <input type="text" value={password} required name="username" onChange={onPasswordChange}/>
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