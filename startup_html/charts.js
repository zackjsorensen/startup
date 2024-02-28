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
    else if (option === 'calc'){
        const box = document.getElementById("calc_popup");
        box.style.display = "flex";
    }

}

function popdown(option) {
    if(option === 'pr') {                 // this needs to be simplified. Gosh. 
        const box = document.getElementById("prs_popup");
        box.style.display = "none";
    }
    else if (option === 'goal'){
        const box = document.getElementById("goals_popup");
        box.style.display = "none";
    }
    else if (option === 'pr_add_cancel') {
        const box = document.getElementById("add_form_pr");
        box.style.display = "none";
    }
    else if (option === 'goal_add_cancel') {
        const box = document.getElementById("add_form_goal");
        box.style.display = "none";
    }
    else if (option === 'calc_popup') {
        const box = document.getElementById(option);
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
    // localStorage.setItem("distance", distanceEl.value);

    let distance = Number(distanceEl.value);
    // distanceEl.textContent = "HEYYYYYYYYYY";
    
    const tselector = "#" + option + "_hours";
    let hoursEl = document.querySelector(tselector);
    // localStorage.setItem("hours", hoursEl.value);
    let hours = Number(hoursEl.value);

    const mselector = "#" + option + "_minutes";
    let minutesEl = document.querySelector(mselector);
    // localStorage.setItem("minutes", minutesEl.value);
    let minutes = Number(minutesEl.value);

    const sselector = "#" + option + "_seconds";
    let secondsEl = document.querySelector(sselector);
    // localStorage.setItem("seconds", secondsEl.value);
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
// row data in an array to be stringified: 
    let toStore = [distance, time, pace];
    SaveData(toStore, option);
    const rowEl = document.createElement('tr');
    rowEl.appendChild(distEl);
    rowEl.appendChild(timeEl);
    rowEl.appendChild(paceEl);

    tableEl.appendChild(rowEl);

}
// options for option are: goal, pr, calc

function SaveData(row, option){
    let data = [];
    const dataText = localStorage.getItem(option);
    if (dataText){
        data = JSON.parse(dataText);
    }
    data.push(row);
    localStorage.setItem(option, JSON.stringify(data));

    // data saved like so: if option is pr, 
    // in local storage
    // "pr" = [[dist1, time1, pace1], [dist2, time2, pace2]]


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
    if (!Number.isInteger(seconds) ) {
        seconds = Math.round(seconds);
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



function Calc(option){  // for the pace calculator
    const a = Add_data('calc');
    const distance = a[0];
    const sec = a[1];
    const pace = CalculatePace(distance, sec);
    

    const output = document.querySelector("#target_pace");
    output.textContent = "Pace: " + pace;

    //----- Code to make new row with the pace -----
    // const pacerEl = document.createElement('td');
    
    // let p = document.querySelector("#calc_tab");
    // let t = "Pace: " + pace;
    // pacerEl.textContent = t;
    // p.appendChild(pacerEl);
    

}

function Load(option){
    
    console.log("Should be cleared now");
    let data = [];
    const dataText = localStorage.getItem(option);
    if (dataText) {  // if there's anything in localstorage prs, get it. 
        data = JSON.parse(dataText);
    }
    
    for (row of data){
        const rowEl = document.createElement('tr');
        const distEl = document.createElement('td');
        const timeEl = document.createElement('td');
        const paceEl = document.createElement('td');

        distEl.textContent = row[0]; 
        timeEl.textContent = row[1]; 
        paceEl.textContent = row[2];

        rowEl.appendChild(distEl);
        rowEl.appendChild(timeEl);
        rowEl.appendChild(paceEl);

        const sel = "#" + option + "s";
        tableEl = document.querySelector(sel);
        tableEl.appendChild(rowEl);

    }
}


Load("pr");
Load("goal");
// how to make the popups disappear if click anywhere else? 
// Can I have a function that updates the HTML file? How does that work?
//     I guess I need to load the data, either from database, or localstorage