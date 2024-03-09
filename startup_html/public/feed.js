// planning

/*
Load some dummy notifications, write code to generate the table data for it



*/

// Fetch a quote
const url = "https://api.quotable.io/random";

fetch(url)
    .then((x) => x.json())
    .then((response)=> {
        document.querySelector("#quote").textContent = JSON.stringify(response.content, null, " ") + " -" + response.author;
    })

function Generate(){  // generate dummy notifications
const stuff = [
    "Josh set a pr of 12 minutes in the mile!",
    "Kim set a goal for the 10 mile of 1 hour!",
    "Kirby set a goal for the 2 mile of 11 minutes!", 
    "Elena set a pr of 4:21 in the mile!",
    "Kim set a pr for the 10 mile: 59:59!",
    "Kyle set a goal for the 3 mile of 15 minutes!"
]
// let random = stuff[Math.floor(Math.random() * stuff.length)];
const rand = Math.floor(Math.random() * 6);

return stuff[rand];

}

setInterval(() => {
    const message = Generate();
    console.log(message);
    const feedtab = document.querySelector('#feed');
    const inner = "<tr><td>" + message +  "</td></tr>";
    feedtab.innerHTML =
      feedtab.innerHTML + inner;
  }, 10000);
  