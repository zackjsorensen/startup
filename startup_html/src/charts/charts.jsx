import React from 'react';
import { AuthState } from '../login/authState';
import { useState } from 'react';
import { SaveStats } from './SaveStats';

export function Stats({ authState }) {
    const [goals, setGoals] = React.useState([]);
    const [prs, setPrs] = React.useState([]);
    const g = "goal";
    const p = "pr";
    //  option is pr or goal, setData is the setGoals or setPrs, data is prs or goals
    React.useEffect(() => {
        fetch(`/api/goals`)
            .then((response) => response.json())
            .then((new_goals) => {
                setGoals(new_goals);
                localStorage.setItem(`goals`, JSON.stringify(goals));
            })
            .catch(() => {
                console.log("Error: fetch request failed");
                const goalText = localStorage.getItem(`goals`);
                if (goalText) {
                    setGoals(JSON.parse(goalText));
                }
            })
    }, [])

    React.useEffect(() => {
        fetch(`/api/prs`)
            .then((response) => response.json())
            .then((new_prs) => {
                setPrs(new_prs);
                localStorage.setItem(`prs`, JSON.stringify(prs));
            })
            .catch(() => {
                console.log("Error: fetch request failed");
                const goalText = localStorage.getItem(`prs`);
                if (prText) {
                    setPrsJSON.parse(prText);
                }
            })
    }, [])





    if (authState === AuthState.Authenticated) {
        //  Retrieve(g, goals, setGoals); // fetches data, sets goals to what is returned
        //  Retrieve(p, prs, setPrs);

        console.log("Stats: ", JSON.stringify(goals));
        console.log("Stats: ", JSON.stringify(prs));

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


        for (const [i, pr] of prs.entries()) {
            prRows.push(
                <tr key={i}>
                    <td>{pr[0]}</td>
                    <td>{pr[1]}</td>
                    <td>{pr[2]}</td>
                </tr>
            );
        }

        return (
            <main id="chartsmain">
                <div><SaveStats
                 goals={goals}
                  prs={prs}
                  /></div>
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
                    <h2 className="seg_headers">My Goals</h2>
                    <table id="pr" className="stat_table">
                        <thead>
                            <tr className="table_hdrs">
                                <th>Distance</th>
                                <th>Time</th>
                                <th>Pace</th>
                            </tr>
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

