import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from './Button';
import SendMoney from '../pages/SendMoney';
import { useNavigate } from 'react-router-dom';


export default function Users() {
    const [users , setUsers] = useState([])
    const [filter , setFilter] = useState("");

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter)
            .then(response => {
                setUsers(response.data.user)
            })
    },[filter])
  return (
    <>
    <div className='font-bold mt-6 text-lg'>
        Users
    </div>
    <div className='my-2'>
        <input 
        onChange={(e)=>{
            setFilter(e.target.value)
        }} type="text" className='w-full py-1 px-2  border rounded shadow border-slate-200' placeholder='Search Users...' />
    </div>
    <div>
        {users.map((user)=> <User user={user} />)}
    </div>
    </>
  )
}

function User({user}){
    const navigate = useNavigate();
    return <div className='flex justify-between'> 
    <div className='flex'>
        <div className='rounded-full bg-slate-200 w-12 h-12 flex justify-center mr-2 mt-1'>
        <div className='flex flex-col  text-xl justify-center h-full  '>
            {user.firstName[0]}
        </div>
        </div>
        
        <div className='flex flex-col justify-center h-full'> 
        <div>
        {user.firstName} {user.lastName}
        </div>
        
    </div>
    </div>
   
    <div className='flex flex-col'>
        <Button onClick={(e)=>{
            navigate("/send?id="+user._id+"&name="+user.firstName)
        }}   label={"Send Money"} />
    </div>

    </div>
}
