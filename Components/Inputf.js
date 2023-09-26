"use client"
import React from 'react';
import { useState } from 'react';
import './FirstPage/main.css'

const Inputf = (props) => {
    const [username,setUsername]=useState("")
    // console.log(props.artibutes);
    return <>
        <div className='margin'>
            <div className='bor'>
                <label className='label'><span className='labelIn '>{props.artibutes.span}</span>
                    <input aria-label={props.artibutes.span} aria-required="true" autocapitalize="off" autocorrect="off" maxlength="75" class="input" dir="" type={props.artibutes.type} value={username} name={props.artibutes.name} onChange={(e) => {
                        // console.log(e.target.value);
                        setUsername(e.target.value)
                    }}>

                    </input>
                </label>
            </div>

        </div>
    </>
}

export default Inputf;
