import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Form = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('');
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault();
        console.log(name);
        document.cookie = `name=${name}; expires=Fri, 12 April 7777 23:59:59 GMT`;
        document.cookie = `email=${email}; expires=Fri, 12 April 7777 23:59:59 GMT`;

        axios.post("https://s47-unique-stroies.onrender.com/createUser",{name,email})
            .then(res => {
                console.log(res.data);
                navigate("/");
            })
            .catch(err => console.error(err));

        axios.post("https://s47-unique-stroies.onrender.com/login")
            .then(res=>{
                console.log(res.data)
                document.cookie=`Token=${res.data};expires=Fri, 12 April 7777 23:59:59 GMT `
            }).catch(err=>console.log(err))

        
    }

    const handelLogOut = () => {
        
        document.cookie = 'name=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    
        navigate('/');
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" placeholder='Enter your name' required className='input' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Enter your email' required className='input' value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type='submit' className='submit'> Submit </button>
            </form>
            <button className='cont' onClick={handelLogOut}> LogOut </button>
        </div>
    )
}

export default Form
