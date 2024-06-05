import React from 'react';
import style from './Input.module.css';



function Input({value, onChange}) {
    return (
        <input type="text" placeholder='0' className={style.screen} onChange={onChange} value = {value} />
    );
}

export default Input;
