import React from 'react';
import style from './Buttons.module.css';

function Buttons({val, onClick}) {
    return (
        <>
            <button className={`${style.mybutton} btn btn-light`} onClick = {onClick}>{val}</button>
        </>
        
    );
}

export default Buttons;