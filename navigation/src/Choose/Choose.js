import React, { useState } from "react";
import s from './Choose.module.css'


const Choose = ()=>{
   
   const [email , setEmail] = useState('')
   const [password , setPassword] = useState('')
   const [emailDirty , setEmailDirty] = useState(false)
   const [passwordDirty , setPasswordDirty] = useState(false)
   const [emailError , setEmailError] = useState('Email не може бути пустим')
   const [passwordError , setPasswordError] = useState('password не може бути пустим')



   const blurHandler = (e) => {
       switch (e.targe.name) {
           case 'email':
                setEmailDirty(true)
           case 'password':
                setPasswordDirty(true)
                break
       }
   }
   
    return(
        <div>
            <form className={s.frm}>
            <h1> Registration</h1>
            {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
            <input    
            onBlur={e=> blurHandler(e)}
            className={s.f} 
            name="email" 
            type='text' 
            placeholder="type your Email..." />
           
            {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
            
            <input 
            onBlur={e=> blurHandler(e)}
            className ={s.s} 
            name="password" 
            type='password' 
            placeholder="Enter your password..." />
            
            <button className ={s.b} type='submit'>Registration</button>
            </form>
           


        </div>
    )
}


export default Choose;