import React from "react";
import s from './Start.module.css'



const Start = () =>{
    return(
    <div className={s.form}>
        <div className={s.header}>
    <div className={s.logo_container}>
        <p className={s.logo}>Logo</p>

<div className={s.input_container}>
    <input className={s.inp}>
        </input>
</div>

 </div>
    </div>


    <div className={s.btn_container}>
     <button className={s.btn_f}>
        sign in 
     </button>
     <button className={s.btn_s}>
         sing up
     </button>
     </div>
    </div>

  
    )
}


export default Start


