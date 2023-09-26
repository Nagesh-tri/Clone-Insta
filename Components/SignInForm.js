"use client"
import React, { useState } from 'react';
import Button from '@/Components/Button';
import ForgetBut from '@/Components/forgetBut';

import FbLogBut from '@/Components/FbLogBut';
import Ordivd from '@/Components/Ordivd';
import Inputf from './Inputf';

const SigninForm = () => {

    return <>
        <form className='signin-form'>
            <div className='mb-5'>
                <div className='mb-4'>
                    <Inputf artibutes={{ span: "Phone number, username, or email", ml: "75", type: "text/Number", name: "username" }} />
                    <Inputf artibutes={{ span: "Password", ml: "75", type: "text", name: "password" }} />

                </div>
                <Button>Log in</Button>
                <div className='flex justify-center flex-col mt-4'>
                <Ordivd/>
                <div className='flex flex-col justify-center'>
                <ForgetBut/>
                </div>
                    
                </div>
            </div>
        </form>
        
    </>
}

export default SigninForm;
