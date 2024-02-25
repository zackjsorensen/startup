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
        box.style.display = "block";
    }
    else if (option === 'goal'){
        const box = document.getElementById("goals_popup");
        box.style.display = "block";
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