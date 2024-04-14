import React from 'react';
import { AuthState } from '../login/authState';
import { useState } from 'react';

export function SaveStats({goals, prs}) {
    console.log("SaveStats:", goals, prs);
    async function saveAll(){

        console.log("saveAll");
        


        const dataToSave = { "goals": goals, "prs": prs };
        try {
            await fetch(`/api/save/stats`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(dataToSave)
            });
            console.log("success");
        } catch (e) {
            console.log("Error saving scores", e);

        }

    }

    return (

        <div id="pr_div" className="stat_div">
            <div><button id="save_button" onClick={() => saveAll()}>Save All</button></div>
            {/* <h2 className="seg_headers">My PRs</h2>
            <div><button className="edit" onClick="popup('pr')">Edit</button></div> */}
        </div>
    )
}

// 
// }function IterTable(option) {
//     // gets the data from either prs or goals from the tables, updates localStorage, returns the array of parsed data
//     const tab = document.getElementById(option);
//     let newdata = [];
//     for (let j = 0, r; r = tab.rows[j]; j++) {
//         let a = [];
//         if (j > 0) {
//             for (let i = 0, cell; cell = r.cells[i]; i++) {

//                 if (i < 3) {
//                     a.push(cell.innerHTML);
//                     console.log(a);
//                 }
//             }
//             newdata.push(a);
//             console.log(newdata);
//         }

//     }

//     localStorage.setItem(option, JSON.stringify(newdata));
//     return newdata;