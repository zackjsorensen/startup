// plan - what do I need? 

// Edit button
//    Pops up alert with options
//      Add
    //      Opens new box entry, saves new data, calculates pace, generates new row
/*      Update
            Lets you select one of the rows, lets you input new time only, generates new row
        Remove
            Lets you select one of the rows, removes it (nothing to remove)
        Close
            Closes the pop up menu without doing anything else

    Same por Goals Edit button

    Pace Calculator
        Distance and Time stored, pace calculated and put in html
*/

function popup(option) {
    if(option === 'pr') {
        const box = document.getElementById("prs_popup");
        box.style.display = "flex";
    }
    else if (option === 'goal'){
        const box = document.getElementById("goals_popup");
        box.style.display = "flex";
    }

}

function popdown(option) {
    if(option === 'pr') {
        const box = document.getElementById("prs_popup");
        box.style.display = "none";
    }
    else if (option === 'goal'){
        const box = document.getElementById("goals_popup");
        box.style.display = "none";
    }

}

function Add_popup(option) {

    // let use input distance and time
    // close popup
    popdown(option);
    // popup add input
    if (option === 'pr') {
        const box = document.getElementById("add_form_pr");
        box.style.display = "flex";
    }
    else if (option === 'goal'){
        const box = document.getElementById("add_form_goal");
        box.style.display = "flex";
    }
    // get the distance and time inputted by the user - gotta wait till they input data
    // let distanceEl = document.querySelector("#${option}_dist");
    // localStorage.setItem("distance", distanceEl.value);

    // let timeEl = document.querySelector("#${option}_time");
    // localStorage.setItem("time", timeEl.value);
}



function Add_data (option) {
// get the distance and time inputted by the user - gotta wait till they input data
    const dselector = "#" + option + "_dist";
    let distanceEl = document.querySelector(dselector);
    localStorage.setItem("distance", distanceEl.value);
    let distance = Number(distanceEl.value);
    
    const tselector = "#" + option + "_hours";
    let hoursEl = document.querySelector(tselector);
    localStorage.setItem("hours", hoursEl.value);
    let hours = Number(hoursEl.value);

    const mselector = "#" + option + "_minutes";
    let minutesEl = document.querySelector(mselector);
    localStorage.setItem("minutes", minutesEl.value);
    let minutes = Number(minutesEl.value);

    const sselector = "#" + option + "_seconds";
    let secondsEl = document.querySelector(sselector);
    localStorage.setItem("seconds", secondsEl.value);
    let seconds = Number(secondsEl.value);

    const sec = ToSeconds(hours, minutes, seconds);
    return [distance, sec, option]; // no se si va a funcionar
}


function MakeRow(dist, sec, option){
    const sel = "#" + option + "s";
    tableEl = document.querySelector(sel);
    let time = 0;
    if (sec > 3599){
        time = FormatFromSec(sec);
    }
    else {
        time = ShortFormatFromSec(sec);
    }
    const distance = dist + " miles";
    const pace = CalculatePace(dist, sec);

    const distEl = document.createElement('td');
    const timeEl = document.createElement('td');
    const paceEl = document.createElement('td');

    distEl.textContent = distance;
    timeEl.textContent = time;
    paceEl.textContent = pace;

    const rowEl = document.createElement('tr');
    rowEl.appendChild(distEl);
    rowEl.appendChild(timeEl);
    rowEl.appendChild(paceEl);

    tableEl.appendChild(rowEl);

}

function ToSeconds (hours, minutes, seconds) { // takes time format and converts to seconds
    console.log("to seconds: " + ((hours*60*60) + (minutes * 60) + seconds))
    return ((hours*60*60) + (minutes * 60) + seconds);


}

function FormatFromSec(sec) {
    let hours = Math.floor(sec/(3600));
    let remainder = sec % 3600;
    let minutes = Math.floor(remainder/60);
    let seconds = remainder % 60;

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    console.log((hours + ":" + minutes + ":" + seconds));

    return (hours + ":" + minutes + ":" + seconds);
    
}

function ShortFormatFromSec(sec) {
    
    let minutes = Math.floor(sec/60);
    let seconds = sec % 60;

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    console.log(( minutes + ":" + seconds));

    return ( minutes + ":" + seconds);
    
}

function CalculatePace(dist, sec) { // takes in dist and seconds, returns formatted pace per mile
    const pace = sec/ dist;
    
    return ShortFormatFromSec(pace);
}

function Submit(option){
    const a = Add_data(option);
    MakeRow(...a)
    console.log("Success I hope")
}

// how to make the popups disappear if click anywhere else? 
// format so i can handle time notation 12:23
// maybe do a box for hours, minutes, and seconds. 