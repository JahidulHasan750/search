import React, { useState } from 'react'
import { data } from '../data'
const Table = () => {
    const [search,setSearch]= useState('');
  return (
    <div className='max-w-[1200px] mx-auto'>
        <h1 className='text-center font-bold text-5xl p-4'>Contact keeper</h1>
    <form>
       <input type='text' onChange={(e)=>setSearch(e.target.value)} placeholder='Search Contacts' className='bg-gray-500 p-2 rounded-md w-full text-center'></input>
     
    </form>
    <table className='w-full mt-4'>
        <thead className='bg-gray-300 border-red-300 border'>
            <tr className='flex justify-between'>
                <th scope='col'  className=' w-full border-r border-black' >First Name</th>
                <th scope='col' className=' w-full border-r border-black'>Last Name</th>
                <th scope='col' className=' w-full border-r border-black'>Email</th>
                <th scope='col' className=' w-full border-r border-black'>Phone</th>
            </tr>
            
        </thead>
        <tbody>
        {data.filter((item)=>{
            return search.toLowerCase() === ''? item:item.first_name.toLowerCase().includes(search);
        })
        .map((item)=>(
            <tr className='flex w-full  justify-between'>
                <td scope='col' className='w-full border border-blue-300'>{item.first_name}</td>
                <td scope='col' className='w-full border border-blue-300'>{item.last_name}</td>
                <td scope='col' className='w-full border border-blue-300'>{item.email}</td>
                <td scope='col' className='w-full border border-blue-300'>{item.phone}</td>
            </tr>
        ))}
          
        </tbody>
    </table>
    </div>
  )
}

export default Table