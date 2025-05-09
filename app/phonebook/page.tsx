 'use client'
import React, {useState, useEffect} from 'react'
import { ViewModal } from '../components/ViewModal'

function Phonebook() {
// https://jsonplaceholder.typicode.com/users
  // const [Information, setInformation] = useState({
  //   name: '',
  //   age: 0,
  //   email: '',
  // });
  // const [Information, setInformation] = useState(data[0]);
  // const [darkMode, setDarkMode] = React.useState(false);
 
  //for contacts list
  interface Contact {
    id: number;
    name: string;
    username: string;
    email: string;
  }

  const [Contacts, setContacts] = useState<Contact[]>([]);
  useEffect(() => {
    // Simulate fetching favorite heroes from the database
    fetch("https://jsonplaceholder.typicode.com/users") // pretend this hits your backend
      .then((res) => res.json())
      .then((data) => {
        setContacts(data); // save heroes to state
      });
  }, []); // Ensure the effect runs only once by adding an empty dependency array
console.log(Contacts);
  

  


const [name, setName] = useState('');
console.log(name);
  




  // const handleedit = () => {
  //   console.log('edit button clicked!');
  // }
  return (
    <>
    <table className='border-gray-300'>
        <thead>
            <tr>
                <th>name</th>
                <th>email</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
            {Contacts.map((item, index) => (
                <tr key={index}>
                  {/* eslint */}
                    <td>{((item.name).toUpperCase())}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>
                        <button onClick={() => setName(item.name)} className='btn btn-sm bg-blue-500 text-white rounded-lg'>View name</button>
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

export default Phonebook