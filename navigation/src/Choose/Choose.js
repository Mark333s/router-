import React from "react";
import s from './Choose.module.css'


const Choose = ()=>{
    return(
        <div>
            <div className={s.block1}>
                <h2>Block1</h2>
            </div>
            <div className={s.block2}>
                <h2>Block2</h2>
            </div>
            <div className={s.block3}>
            <h2>Block3</h2>
        </div>
        <div className={s.block4}>
                <h2>Block4</h2>
            </div>


        </div>
    )
}


export default Choose;