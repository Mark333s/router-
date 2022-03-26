import React from "react";
import s from './Start.module.css'
import { Route, Routes , Link } from "react-router-dom";
import Choose from "../Choose/Choose";
import Button from "./Button";


const Start = () =>{
    return(
        <div>
    <div className={s.form}>
        <div className={s.header}>
    <div className={s.logo_container}>
        <p className={s.logo}>Logo</p>

<div className={s.input_container}>
    <span className={s.spn}>
        UA
        </span>
        <button className={s.triangle}>s</button>
</div>

 </div>
    </div>


    <div className={s.btn_container}>
     <button className={s.btn_f}>
        sign in 
     </button>
     <Link to='/Choose'>
     <Button />
     </Link>
     </div>
     
    
    </div>
  
    </div>
    )
}


export default Start


