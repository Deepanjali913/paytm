import React from 'react'

export default function InputBox({onChange , placeholder , label}) {
  return (
    <div>
        <div className='text-sm font-medium text-left py-2 '>
        {label}
        </div>
        <input onChange={onChange} placeholder={placeholder} className='w-full border rounded border-slate-200 px-2 py-1 '/> 
    </div>
  )
}
