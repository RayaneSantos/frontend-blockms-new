import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }){

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
  
   async function handleSubmit(e){
      e.preventDefault();
      console.log('asdasd ', email, password);
  
      const response = await api.post('/signin', {
        email,
        password
      });

      console.log('asd response', response);
    
      if (response.data.success === true){
        console.log('asdasd response', response);
        const { _id } = response.data;
        localStorage.setItem('user', _id);
        history.push('/Start');  
      }
      else 
        console.log('Algo deu errado no login');
    }
  
    return (
        <>
            <p>
                Teste do teste
            </p>

            <form onSubmit={handleSubmit}>

                <label htmlFor="email">E-MAIL</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    >
                </input>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}>
                </input>
                <button className="btn" type="submit">Entrar</button>
            </form>
       </>
    )
}