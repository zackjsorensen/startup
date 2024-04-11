const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);


// Fetch a quote
const url = "https://api.quotable.io/random";

fetch(url)
    .then((x) => x.json())
    .then((response) => {
        document.querySelector("#quote").textContent = JSON.stringify(response.content, null, " ") + " -" + response.author;
    })

function doWebSocket() {
    socket.onopen = (event) => {
        // do I want to display connection succesful message?
        console.log("WS opened");
    };
    socket.onclose = (event) => {
        console.log("WS disconnected");
    };
    socket.onmessage = async (event) => {
        console.log("recieived: ", event);
        console.log("received: ", JSON.parse(await event.data.text()));
        displayMsg(JSON.parse(await event.data.text()));
        // This page will just send messages, doesn't need to receive them
    };
}

function displayMsg(msg) {
    const feedEl = document.querySelector('#feed');
    let notice = `${msg.from} set a ${msg.type} of ${msg.time} in the ${msg.dist}`;
    const newEl = document.createElement('td');
    console.log(notice);
    newEl.textContent = notice;
    const rowEl = document.createElement('tr');
    rowEl.appendChild(newEl);
    feedEl.appendChild(rowEl);
}

doWebSocket();


// setInterval(() => {
//     const message = Generate();
//     console.log(message);
//     const feedtab = document.querySelector('#feed');
//     const inner = "<tr><td>" + message +  "</td></tr>";
//     feedtab.innerHTML =
//       feedtab.innerHTML + inner;
//   }, 10000);
