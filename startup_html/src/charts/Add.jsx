import React from 'react';
import { AuthState } from '../login/authState';
import { useState } from 'react';


export function Add({goals, prs}) {
    function add_helper(){
        console.log("add_helper", goals, prs);
    }
    return (
        <button type="button" onClick={() => add_helper()}>Add</button>

    );

}