import React from "react";
import logo from "../../assets/images/logo_transparent.png"

const RetreivePasswordUI = ({
  form: { onChange, form, passwordFormValid, error, onPasswordResetSubmit, loading },
}) => {
  return (
    <div style={{display: "flex", justifyContent: 'center', alignContent: 'center'}}>
      <div className={"glass"} style={{display: "flex", justifyContent: 'center', alignContent: 'center', textAlign: "center"}}>
      <div>
        <img src={logo} style={{maxHeight: "30vh", width:"auto"}}/>
      <div className={"wrapper"}>
         <div className={"title"}>
            Recupero Password
         </div>
         <form>
            <div className={"field"}>
               <input type="text" value={form.username || ""} required onChange={onChange} name="username"/>
               <label>Indirizzo Email</label>
            </div>
            <div className={"field"}>
               <input type="button" value="Recupera" onClick={onPasswordResetSubmit}/>
            </div>
         </form>
         </div>
      </div>
     </div>
    </div>
  );
};

export default RetreivePasswordUI;
