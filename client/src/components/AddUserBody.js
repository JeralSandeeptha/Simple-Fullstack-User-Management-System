import React, { useState } from 'react';
import '../styles/addnewuserbody.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddUserBody() {

    const navigate= useNavigate();

    const [name, setName] = useState('');
    const [subscription, setSubscription] = useState('');
    const [image, setImage] = useState('');

    const handleName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handleSubscription = (e) => {
        console.log(e.target.value);
        setSubscription(e.target.value);
    }

    const handleImage = (e) => {
        console.log(e.target.value);
        setImage(e.target.value);
    }

    const handleSubmit = (e) => {
        //prevent page reload
        e.preventDefault();

        //insert data
        const contact = { name, subscription, image };

        axios.post('http://localhost:8000/api/contacts', contact)
            .then(
                alert('Contact Added'),
                setImage(''),
                setName(''),
                setSubscription('')
            )
            .catch( (error) => {
                console.log(error.message);
            });

        navigate('/');
    }

    return (
        <div className='addnewuserbody'>
            <div className='inner-addnewuserbody'>
                <form className='form' onSubmit={handleSubmit}>
                    <h1>ADD NEW USER</h1>
                    <div className='input-div'>
                        <h5>Name</h5>
                        <input type="text" placeholder='Enter your name' onChange={handleName}/>
                    </div>
                    <div className='input-div'>
                        <h5>Subscription</h5>
                        <input type="text" placeholder='Enter your subscription' onChange={handleSubscription}/>
                    </div>
                    <div className='input-div'>
                        <h5>Add Image URL</h5>
                        <input type="text" placeholder='Add your image URL' onChange={handleImage}/>
                    </div>
                    <button className='subBtn'>Add Contact</button>
                </form>
            </div>
        </div>
    );

}

export default AddUserBody;
