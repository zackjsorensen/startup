import React, { useEffect } from 'react';
import { AuthState } from '../login/authState';
import { useState } from 'react';
import { SaveStats } from './SaveStats';
import { Add } from './Add';


export function AddForm({goals, setGoals, prs, setPrs}) {
    console.log("ADDED form");
    const [dist, setDist] = React.useState('');
    const [hr, setHr] = React.useState('');
    const [min, setMin] = React.useState('');
    const [sec, setSec] = React.useState('');
    const [pace, setPace] = React.useState('');
    
    function add_goal(){
        console.log("Saving Goal", dist);
        const raw_seconds = ToSeconds(hr, min, sec);
        const pace = CalculatePace(dist, raw_seconds);
        goals.push([`${dist} miles`, `${hr}:${min}:${sec}`, pace]);
        console.log(goals);
        setGoals(goals.concat());
    }

    function add_pr(){
        console.log("Add PR", dist);
        const raw_seconds = ToSeconds(hr, min, sec);
        const pace = CalculatePace(dist, raw_seconds);
        prs.push([`${dist} miles`, `${hr}:${min}:${sec}`, pace]);
        console.log(prs);
        setGoals(prs.concat());
    }

    useEffect(() => {
        console.log("udpate_pace");
        if(!isNaN(parseInt(hr)) && !isNaN(parseInt(min)) && !isNaN(parseInt(sec)) && !isNaN(parseInt(dist))){
            const raw_seconds = ToSeconds(hr, min, sec);
            const newPace = CalculatePace(dist, raw_seconds);
            console.log('newPace=', newPace);
            setPace(newPace);   
        } else {
            setPace('');
        }
    }, [dist, hr, min, sec]);

    function cancel_add(){
        setDist('');
        setHr('');
        setMin('')
        setSec('')
    }

    return (
        <div className="add_form" id = "add_form_pr" >
            <form>
                <input type="text" id="pr_dist" placeholder="distance:" value={dist} onChange={(e) => setDist(e.target.value)}/>
                <input type="text" id="pr_hours" placeholder="hours" value={hr} onChange={(e) => setHr(e.target.value)&& update_pace()}/>
                <input type="text" id="pr_minutes" placeholder="minutes" value={min} onChange={(e) => setMin(e.target.value)&& update_pace()}/>
                <input type="text" id="pr_seconds" placeholder="seconds" value={sec} onChange={(e) => setSec(e.target.value)&& update_pace()}/>
                <input type="text" placeholder="pace" readOnly={true} value={pace}/>
                <button type="button" onClick={()=>add_goal()}>Add Goal</button>
                <button type="button" onClick={()=>add_pr()}>Add PR</button>
                <button type="button" onClick={()=>cancel_add()}>Clear</button>
            </form>
        </div >
    );
}

function ToSeconds(hours, minutes, seconds) { // takes time format and converts to seconds
    console.log("to seconds: " + ((hours * 60 * 60) + (minutes * 60) + seconds))
    return ((hours * 60 * 60) + (minutes * 60) + seconds);
}

function ShortFormatFromSec(sec) {

    let minutes = Math.floor(sec / 60);
    let seconds = sec % 60;

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (!Number.isInteger(seconds)) {
        seconds = Math.round(seconds);
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    console.log((minutes + ":" + seconds));

    return (minutes + ":" + seconds);

}

function CalculatePace(dist, sec) { // takes in dist and seconds, returns formatted pace per mile
    const pace = sec / dist;

    return ShortFormatFromSec(pace);
}