 'use client'
import React, {useState, useEffect} from 'react'
import { ViewModal } from '../components/ViewModal'

function Table() {

  const data = [
    { name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { name: 'Alice Johnson', age: 22, email: 'alice.johnson@example.com' },
  ];
  // const [Information, setInformation] = useState({
  //   name: '',
  //   age: 0,
  //   email: '',
  // });
  const [Information, setInformation] = useState(data[0]);
  // const [darkMode, setDarkMode] = React.useState(false);
  

  


  console.log(Information);
const [name, setName] = useState('');
console.log(name);
  




  const handleedit = () => {
    console.log('edit button clicked!');
  }
  return (
    <>
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
                    <td>{((item.name).toUpperCase())}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>
                        <button onClick={() => setName(item.name)} className='btn btn-sm bg-blue-500 text-white rounded-lg'>View name</button>
                        <button onClick={() => setInformation(item)} className='btn btn-sm bg-green-500 text-white rounded-lg'>View infos</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    <dialog id="my_modal_1" className="modal">
        <ViewModal></ViewModal>
    </dialog>
    </>
  )
} 

export default Table