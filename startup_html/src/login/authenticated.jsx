import React from "react";
import { useNavigate } from "react-router-dom";

export function Authenticated(props) {
    const navigate = useNavigate();

    function logout() {
        fetch('api/auth/logout', {
            method: 'delete',
        })
            .catch(() => {
                console.log("Logout Failed");
            })
            .finally(() => {
                localStorage.removeItem('username');
                props.onLogout();                   // calls the funciton that was passed down to change parent authState
            })
    }

    return (

        <button onClick={() => logout()}>Logout</button> // return the logout button
    )
}