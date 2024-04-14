import React from 'react';

export function Table(id) {

    // get the data from backend
    // put each row in a row, put all in an array
    React.useEffect(() => {
        fetch('/api/goals')
            .then((response) => response.json())
            .then((goals) => {
                
            })
    })

    return (
        <table id="goal" class="stat_table">
            <tr class="table_hdrs">
                <th>Distance</th>
                <th>Time</th>
                <th>Pace</th>
            </tr>

        </table>

    )
}