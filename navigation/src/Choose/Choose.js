import React from "react";
import s from './Choose.module.css'


const Choose = ()=>{
    return(
        <div>
            <form className={s.frm}>
            <h1> Registration</h1>
            <input name="email" type='text' placeholder="type your Email..." />
            <input name="password" type='password' placeholder="Enter your password..." />
            <button type='submit'>Registration</button>
            </form>
           


        </div>
    )
}


export default Choose;