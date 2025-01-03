import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import {Button} from '../components/Button';
import BottomWarning from '../components/BottomWarning';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

export default function Signup() {
    const [username , setUsername] = useState("");
    const [firstName , setFirstname] = useState("");
    const [lastName , setLastname] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='bg-white w-80 rounded-lg px-4 justify-center h-max text-center p-2  '>
                <Heading label={"Sign up"}/>
                <SubHeading label={"Enter your credentials here to create an account"}/>
                <InputBox onChange={(e)=>{
                    setUsername(e.target.value)
                }} placeholder="abc@gmail.com" label={"User Name"}/>
                <InputBox onChange={(e)=>{
                    setFirstname(e.target.value)
                }} placeholder="John" label={"First Name"}/>
                <InputBox onChange={(e)=>{
                    setLastname(e.target.value)
                }} placeholder="Doe" label={"Last Name"}/>
                <InputBox onChange={(e)=>{
                    setPassword(e.target.value)
                }} placeholder="123456" label={"Password"}/>
                <div className='pt-4'>
                <Button
                onClick={async()=>{
                    const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                        username ,
                        firstName,
                        lastName,
                        password
                    }, {
                        headers: {
                          'Content-Type': 'application/json',
                        },
                      })
                    localStorage.setItem("token",response.data.token)
                    navigate('/dashboard')
                }} 
                 label={"Sign Up"}/>   
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            </div>
        </div>
    </div>
    
  )
}
