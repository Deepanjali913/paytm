import React from 'react'

export default function AppBar() {
  return (
    <div className='shadow h-14 flex justify-between'>
        <div className='flex flex-col justify-center h-full ml-5'>
            Payment App
        </div>
        <div className='flex'>
            <div className='flex flex-col justify-center mr-6'>
                Hello
            </div>
            <div className='bg-slate-200 w-12 h-12 rounded-full flex justify-center mt-1 mr-2'>
                <div className='flex flex-col text-xl justify-center h-full'>
                    U
                </div>
            </div>

        </div>
    </div>
  )
}
