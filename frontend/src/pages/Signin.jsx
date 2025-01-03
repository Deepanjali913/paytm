import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import { Button } from '../components/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import BottomWarning from '../components/BottomWarning'

export default function Signin() {
    const [userName , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate();
  return (
    <div className='bg-slate-500 h-screen flex justify-center '>
        <div className='flex flex-col justify-center'>
            <div className='bg-white p-2 px-4 text-center rounded-lg h-max w-80'>
                <Heading label={"Sign In"}/>
                <SubHeading label={"Enter your credentials to access your account"} />
                 <InputBox placeholder='abc@gmail.com' label={"User Name"} onChange={(e)=>{
                    setUsername(e.target.value)
                 }} />
                 <InputBox placeholder='123456' label={"Password"} onChange={(e)=>{
                    setUsername(e.target.value)
                 }} />
                 <div className='pt-4'>
                    <Button label={"Sign In"} onClick={async()=>{
                        const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                            userName,
                            password
                        })
                        localStorage.setItem("token",response.data.token)
                        navigate('/dashboard')
                    }} />
                 </div>
                 <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={'/signup'} />

            </div>
        </div>
    </div>
  )
}
