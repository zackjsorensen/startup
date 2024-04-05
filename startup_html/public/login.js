async function login() {
    createOrLogin('/api/auth/login');
}

async function create() {
    createOrLogin('/api/auth/create');
}

// endpoint is either /api/auth/create or /api/auth/login
async function createOrLogin(endpoint) {
    // get username and password from userinput, save to localStorage
    const nameEl = document.querySelector("#username");
    const userName = nameEl.value;
    localStorage.setItem("username", userName);

    const passEl = document.querySelector("#password");
    const password = passEl.value;
    localStorage.setItem("password", password);
    console.log("credential gathered");

    // send to Server to create new user or login
    // we send a POST request with login info in the body as json
    const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({email: userName, password: password}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    });
    console.log("Reponse received");
    console.log(response.msg); // why am I never getting a response? 
    
    if (response.ok) {
        console.log("Response is ok", response.msg);
        window.location.href = 'charts.html';
    } else {
        console.log("Error with login");
        const body = await response.json();
        console.log(body.msg);
    }
}

function logout() {
    fetch('api/auth/logout', {
        method: 'delete',
    }).then(() => (window.location.href = '/'));
}

// makes a request with the email
// if request is succesful, returns non-null
// if we don't have anything associated with that email, returns null
// idk if I need this....
async function getUser(email) {
    const response = await fetch(`/api/user${email}`);
    if (response.status === 200) {
        return response.json();
    }

    return null;
}

async function test() {
    const response = await fetch('api/test');
    console.log(response);
    console.log("Should have gotten response now");

}

console.log("Testing log");


// Response are never returning, but they return when I curl -- why?? 