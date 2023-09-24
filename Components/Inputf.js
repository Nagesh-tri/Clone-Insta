import React from 'react';
import './FirstPage/main.css'

const Inputf = (props) => {
    // console.log(props.artibutes);
    return <>
        <div className='margin'>
            <div className='bor'>
                <label className='label'><span className='labelIn '>{props.artibutes.span}</span><input aria-label={props.artibutes.span} aria-required="true" autocapitalize="off" autocorrect="off" maxlength={props.artibutes.ml} class="input" dir="" type={props.artibutes.type} value="" name={props.artibutes.name} /></label>
            </div>

        </div>
    </>
}

export default Inputf;
