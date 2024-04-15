import React from 'react';
import { AuthState } from '../login/authState';
import { useState } from 'react';

// const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
// const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
console.log("starting web socket");

const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);


export function Table({}) {
    console.log("Table called");
    const [notifications, setNotifications] = React.useState([]);
    const g = "goal";
    const p = "pr";
    //  option is pr or goal, setData is the setGoals or setPrs, data is prs or goals
   
    React.useEffect(() => {

        socket.onopen = (event) => {
            // do I want to display connection succesful message?
            console.log("WS opened");
        };
        socket.onclose = (event) => {
            console.log("WS disconnected");
        };
        socket.onmessage = async (event) => {
            console.log("recieived: ", event);
            let message = JSON.parse(await event.data);
            console.log("message: ", message);
            // This page will just send messages, doesn't need to receive them

            notifications.push([`A friend added a goal of ${message.time} for ${message.dist}!`]);
            setNotifications(notifications.concat());
        };
    
    }, [])


        //  Retrieve(g, goals, setGoals); // fetches data, sets goals to what is returned
        //  Retrieve(p, prs, setPrs);

        console.log("Notificaitons: ", JSON.stringify(notifications));

       
        const rows = [];


        for (const [i, notification] of notifications.entries()) {
            rows.push(
                <tr key={i}>
                    <td>{notification[0]}</td>
                </tr>
            );
        }

        return (
            <main id="feedmain">
                <div className="stat_div">
                    <h2 className="seg_headers">Notifications</h2>
                    <table className="stat_table">
                        <tbody>{rows}</tbody>
                    </table>
                </div>
            </main >
        );

    } 




 