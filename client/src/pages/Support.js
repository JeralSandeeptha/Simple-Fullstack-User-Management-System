import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Support() {

  const [contacts, setContacts] = useState([]);

  const baseURL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log(`${baseURL}/contacts`);
    axios.get(`${baseURL}/contacts`)
      .then((res) => {
        console.log(res.data);
        setContacts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 style={{color: 'black'}}>Our Customers</h1>
      {
        contacts.map((contact) => {
          return (
            <h1 style={{color: 'black'}}>{contact.name}</h1>
          )
        })
      }
    </div>
  )
}

export default Support;
