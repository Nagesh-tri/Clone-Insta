"use client"
import React, { useState } from 'react';
import Button from '@/Components/Button';

import FbLogBut from '@/Components/FbLogBut';
import Ordivd from '@/Components/Ordivd';
import Inputf from './Inputf';

const SigninForm = () => {

    return <>
        <form className='signup-form'>
            <div className='mb-5'>
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

export default SigninForm;
