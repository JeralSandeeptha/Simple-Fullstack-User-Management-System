import React, { useEffect, useState } from 'react';
import '../styles/addnewuserbody.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUserBody() {

    const [contact, setContact] = useState('');

    const BASE_URL = process.env.REACT_APP_API_URL;

    const navigate= useNavigate();

    const { id } = useParams();

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
        e.preventDefault();
        const contact = { name, subscription, image };
        axios.patch(`${BASE_URL}/contacts/${id}`, contact)
            .then(
                alert('User Updated'),
                navigate('/')
            )
            .catch( (error) => {
                console.log(error);
            });
    }

    useEffect( () => {
        axios.get(`${BASE_URL}/contacts/${id}`)
          .then( (res) => {
            setName(res.data.name);
            setSubscription(res.data.subscription);
            setImage(res.data.image);
          })
          .catch( (error) => {
            console.log(error.message);
          });
    }, []);

    return (
        <div className='addnewuserbody'>
                <div className='inner-addnewuserbody' onSubmit={handleSubmit}>
                    <form className='form'>
                        <h1>UPDATE USER</h1>
                        <div className='input-div'>
                            <h5>Name</h5>
                            <input type="text" placeholder='Enter your name' onChange={handleName} value={name}/>
                        </div>
                        <div className='input-div'>
                            <h5>Subscription</h5>
                            <input type="text" placeholder='Enter your subscription' onChange={handleSubscription} value={subscription}/>
                        </div>
                        <div className='input-div'>
                            <h5>Add Image URL</h5>
                            <input type="text" placeholder='Add your image URL' onChange={handleImage} value={image}/>
                        </div>
                        <button className='subBtn'>Update Contact</button>
                    </form>
                </div>
            </div>
    );

}

export default UpdateUserBody;
