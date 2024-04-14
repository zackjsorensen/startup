import React from 'react';
import { createHashRouter, useNavigate } from 'react-router-dom';

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');

    async function login() {
        createOrLogin('/api/auth/login');
    }
    
    async function create() {
        createOrLogin('/api/auth/create');
    }
    
    // endpoint is either /api/auth/create or /api/auth/login
    async function createOrLogin(endpoint) {
        const response = await fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify({ email: userName, password: password }),  // so these we have from the second the user typed them in - thnx React
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });
        console.log("Reponse received");
        if (response?.status === 200) {
            console.log(response);
            localStorage.setItem('username', userName);
            props.onLogin(userName);
        } else {
            console.log("Error with login");
            const body = await response.json();
            console.log(body.msg);
        }
    }

    return (
        <form id="loginset">
            <p>
                <input type="text " 
                id="username" 
                placeholder="Username"  // so my id is redundant now, bc we don't have to extract the username from it when submit is hit
                onChange={(e) => setUserName(e.target.value)}  // now it's updated in real time as the user types it in. Dang
                />
            </p>
            <p>
                <input 
                type="text" 
                id="password" 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                />
            </p>
            <div id="loginControls">
                <button id="b_login" type='button' onClick={ () => login()}>Login</button>
                <button id="b_create" type='button' onClick={() => create()}>Create</button>
            </div>
        </form>
    );
}