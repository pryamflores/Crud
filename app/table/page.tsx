 'use client'
import React from 'react'

function Table() {
  const data = [
    { name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { name: 'Alice Johnson', age: 22, email: 'alice.johnson@example.com' },
    
  ];

  const handledelete = () => {
    console.log('Delete button clicked!');
  }
  const handleedit = () => {
    console.log('edit button clicked!');
  }
  return (
    <table className='border-gray-300'>
        <thead>
            <tr>
                <th>name</th>
                <th>age</th>
                <th>email</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>
                        <button onClick={handledelete} className='btn btn-sm bg-green-500 text-white rounded-lg'>Delete</button>
                        <button onClick={handleedit} className='btn btn-sm bg-blue-500 text-white rounded-lg'>Edit</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  )
} 

export default Table