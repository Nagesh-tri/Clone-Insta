"use client"
import React, { useState } from 'react';
import Button from '@/Components/Button';

import FbLogBut from '@/Components/FbLogBut';
import Ordivd from '@/Components/Ordivd';
import Inputf from './Inputf';

const SignupForm = () => {

    return <>
        <form className='signup-form'>
            <div className='mb-5'>

                <div className='mx-10 mb-2.5'> <span className='sspan'>Sign up to see photos and videos from your friends.</span></div>
                <div><Button><FbLogBut style={{ text: "pb-2 fb-login text-white", color: "color-white text-white" }} /></Button></div>
                <Ordivd />
                <div className='mb-4'>
                    <Inputf artibutes={{ span: "Mobile Number or Email", ml: "75", type: "text/Number", name: "email" }} />
                    <Inputf artibutes={{ span: "Full Name", ml: "75", type: "text", name: "name" }} />
                    <Inputf artibutes={{ span: "Username", ml: "75", type: "text", name: "username" }} />
                    <Inputf artibutes={{ span: "Password", ml: "75", type: "text", name: "password" }} />

                </div>
                <Button>Sign up</Button>
            </div>
        </form>
        
    </>
}

export default SignupForm;
