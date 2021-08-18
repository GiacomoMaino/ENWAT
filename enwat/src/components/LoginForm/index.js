import React from 'react'

import {Link} from 'react-router-dom'

const LoginForm = ({form: { onChange, form, loginFormValid, error, onSubmit, loading }}) =>{
    return(<div className={"wrapper"}>
    <div className={"title"}>
       Login Form
    </div>
    <form>
       <div className={"field"}>
          <input type="text" value={form.username || ""} required onChange={onChange} name="username"/>
          <label>Indirizzo Email</label>
       </div>
       <div className={"field"}>
          <input type="password" value={form.password || ""} required onChange={onChange} name="password"/>
          <label>Password</label>
       </div>
       <div className={"content"}>
          <div className={"pass-link"}>
             <Link to="/auth/pirla">Dimenticato la password?</Link>
          </div>
       </div>
       <div className={"field"}>
          <input type="button" value="Accedi" onClick={onSubmit}/>
       </div>
    </form>
    </div>)
}

export default LoginForm;