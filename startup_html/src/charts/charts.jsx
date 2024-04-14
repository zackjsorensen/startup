import React from 'react';
import { AuthState } from '../login/authState';
import { useState } from 'react';

export function Stats({ authState }) {
    const [goals, setGoals] = React.useState([]);
    const [prs, setPrs] = React.useState([]);
    const g = "goal";
    const p = "pr";

    function Retrieve(option, data, setData) {   // option is pr or goal, setData is the setGoals or setPrs, data is prs or goals
        React.useEffect(() => {
            console.log(`/api/${option}s`);
            fetch(`/api/${option}s`)
                .then((response) => response.json())
                .then((new_data) => {
                    setData(new_data);
                    localStorage.setItem(`${option}s`, JSON.stringify(data));
                })
                .catch(() => {
                    console.log("Error: fetch request failed");
                    const dataText = localStorage.getItem(`${option}s`);
                    if (dataText) {
                        setData(JSON.parse(dataText));
                    }
                })
        }, [])
    }

    if (authState === AuthState.Authenticated) {
         Retrieve(g, goals, setGoals); // fetches data, sets goals to what is returned
         Retrieve(p, prs, setPrs);

        console.log(JSON.stringify(goals));
        console.log(JSON.stringify(prs));

        const goalRows = [];
        const prRows = [];
        for (const [i, goal] of goals.entries()) {
            goalRows.push(
                <tr key={i}>
                    <td>{goal[0]}</td>
                    <td>{goal[1]}</td>
                    <td>{goal[2]}</td>
                </tr>
            );
        }

        return (
            <main id="chartsmain">
                <div id="pr_div" className="stat_div">
                    <h2 className="seg_headers">My PRs</h2>
                    <table id="pr" className="stat_table">
                        <thead>
                            <tr className="table_hdrs">
                                <th>Distance</th>
                                <th>Time</th>
                                <th>Pace</th>
                            </tr>
                        </thead>
                        <tbody>{prRows}</tbody>
                    </table>
                </div>
                <div id="pr_div" className="stat_div">
                <h2 className = "seg_headers">My Goals</h2>
                    <table id="pr" className="stat_table">

                        <thead className="table_hdrs">
                            <th>Distance</th>
                            <th>Time</th>
                            <th>Pace</th>
                        </thead>
                        <tbody>{goalRows}</tbody>
                    </table>
                </div>
            </main >
        );

    } else {

        return;
    }
}

