import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/titles.css';
import axios from 'axios';

function Titles() {

  const [contacts, setContacts] = useState([]);

  const BASE_URL = process.env.REACT_APP_API_URL;

  console.log(`${BASE_URL}`);
  console.log(`${BASE_URL}/contacts`);

  useEffect( () => {
      axios.get(`${BASE_URL}/contacts`)
        .then( (res) => {
          setContacts(res.data);
        })
        .catch( (error) => {
          console.log(error.message);
        });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${BASE_URL}/contacts/${id}`)
      .then(
        alert('User deleted')
      )
      .catch( (error) => {
        console.log(error.message)
      });
  }

  return (

    <div className='main'>

      <div className='titles'>
        <h5 className='title'>NAME</h5>
        <h5 className='title'>SUBSCRIPTION</h5>
        <h5 className='title'>CONTACT</h5>
        <h5 className='title'>ACTIONS</h5>
      </div>
      
      <div className='contactsList'>

        {
          contacts.map((contact, index) => {
              return(
                <div className='contact' key={contact.image}>
                  <h5>{contact.name}</h5>
                  <h5>{contact.subscription}</h5>
                  <div className='image'>
                    <img src={contact.image} alt="icon" className='user-image'/>
                  </div>
                  <div className='action-buttons'>
                    <Link className='update' to={`/updateuser/${contact._id}`}>Update</Link>
                    <Link className='delete' to='' onClick={ () => {handleDelete(contact._id)}}>Delete</Link>
                  </div>
                </div>
              );   
          })
        }
        
      </div>

    </div>
  );

}

export default Titles;
