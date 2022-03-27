import React, { useState } from "react";
import s from './Start.module.css'
import { Route, Routes , Link } from "react-router-dom";
import Choose from "../Choose/Choose";
import Button from "./Button";
import Select from 'react-select';



const options = [
    {
      value: 'Ukrainian',
      label: 'UA'

    },
    {
        value: 'English',
        label: 'EN'
  
      },{
        value: 'Polish',
        label: 'PL'
  
      },
]

const Start = () =>{

   const [currentLanguage , setCurrentLanguage] = useState('UA')

   const getValue = ()=>{
       return currentLanguage ? options.find(l => l.value === currentLanguage) : ''
   }

   const onChange = (newValue)=>{
   setCurrentLanguage(newValue.value)
   }

    return(
        <div>
    <div className={s.form}>
        <div className={s.header}>
    <div className={s.logo_container}>
        <p className={s.logo}>Logo</p>

<div className={s.input_container}>
    <h2 className={s.selector}></h2>
    <Select  
    onChange={onChange}
    value={getValue()} 
    className={s.inp}  
    options={options}/>
        
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


