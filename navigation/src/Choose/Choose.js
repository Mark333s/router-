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

   const emailHandler =(e)=>{
       setEmail(e.target.value)
       const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
       
       if(!re.test(String(e.target.value).toLowerCase())){
           setEmailError('неправильний Email')
       }else{
           setEmailError('')
       }
   }

   const passwordHandler = (e)=>{
       setPassword(e.target.value)
       if(e.target.value.length < 3 || e.target.value.length > 8){
           setPasswordError('s')
    }if (!e.target.value){
        setEmailError('неправильний Email')
    }
       else {
           setPasswordError('')
       }
   }
   
    return(
        <div>
            <form className={s.frm}>
            <h1> Registration</h1>
            {(emailDirty && emailError) && <div className={s.err}>{emailError}</div>}
            <input    
            onChange={e=> emailHandler(e)}
            value={email}
            onBlur={e=> blurHandler(e)}
            className={s.f} 
            name="email" 
            type='text' 
            placeholder="type your Email..." />
           
            {(passwordDirty && passwordError) && <div className={s.er}>{passwordError}</div>}
            
            <input 
             onChange={e=> passwordHandler(e)}
            value={password}
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