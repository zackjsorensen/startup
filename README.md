# Race Pace Calculator

## Specification Deliverable
### Elevator Pitch
Those in the running community seek to continually improve and acheive personal goals, running faster and faster in races. As with other aspects of life, careful planning is key to success in a race. Runners often pick a goal time and calculate the paces they need to hit to acheive that time. Often they engage in mental math or use quickly scribbled calculations. This web service seeks to aid them by providing a place where they can calculate their ideal race paces and track their goals and progress all in one website, thus saving time and making for more streamlined race planning.
### Design: Login Page
![Design of login page](https://github.com/zackjsorensen/startup/assets/156393800/73501cb7-a2af-420c-8914-9eab8d391abf)
### Design: Main Page
![Design of main page](https://github.com/zackjsorensen/startup/assets/156393800/d4517d17-e454-41e5-953c-03f81ef4b09f)
### Diagram: User-Server Interaction
![User-Server Interaction Diagram](https://github.com/zackjsorensen/startup/assets/156393800/802eb2b6-9085-4cf4-aeb3-e14c8a33c281)
Users recieve info about the goals and records set by their friends

### Key Features
- Login using HTTPS
- Database that saves any entered personal bests and goals
- Interactive pace calculator (enter a goal time and distance and it outputs the pace to run)
- Feed showing goals and personal bests of friends
- Ability to edit, delete, or add goals and personal records

### Required Technologies
- **HTML** - will be used to structure the page, especially the tables displaying user's info
- **CSS** - will use colors and design to provide an energetic and invigorating feel to the website while keeping it simple and user friendly
- **JavaScript** - provides pace calculations given parameters entered by the user, used for login service, used to create/edit/delete goals and records
- **Database/Login** - stores and saves data entered by users, tracks their personal accounts
- **Websocket** - when a user enters a new goal or personal best, other users (friends) are notified
- **Web Service** - Will access a different motivational quote from a third party service for each login.
- **Web Framework** - Will use React for the framework

## HTML Deliverable  
- HTML pages - I have 3 pages - a login, a main page displaying database stats and the calculator, and a feed page showing notifications
- Links - each page has a header navigation that links to all of the other pages
- Text - Text headings and table headings organize the display.
- Images - I included a running image on the feed.html page
- DB/Login - Input boxes and submit button for login. On the stats page, the goals and PRs represent data pulled from the data base
- Websocket - the feed page shows where notifications about friends will go, this data will come from Websocket
- 3rd Party Server - on the feed page is a text place holder where inspirational quotes form a 3rd party server will go

## CSS Deliverable  
I have used CSS to style my product including  
- Header that disappears when the page gets too small, a footer and a main body
- Navigation Elements - Put in a separate div with a different color to stand out from the main header
- Responsive to window resizing - I used flex features to make my application shift appropritately when the window size changes
- Application Elements - Used 3 main colors for simplicity and readability, made the tables striped so individual rows stand out
- Application text content - simple sans serif font used the whole time
- Application images - made my image transparent on the feed page

  ## Javascript Deliverable
  Using JavaScript my website now works for a single user

- login - Entering a value into login/password takes you to the main page (My Stats page)
- database - goals and personal records are stored and loaded from localStorage, as a placeholder for the database technology
- WebSocket - with setInterval I generate random notifications as a placeholder for future WebSocket notifications about friends' goals and PRs
- application logic - JS lets me bring in popups to enter new data into a field, generate new tables rows of data when the user inputs a new goal or record, remove a row from the table and local storage, and use basic Math functions to calculate a race pace given parameters entered by the user.

  ## Service Deliverable
  Backend server and api calls
  - Node.js/Express HTTP service - done, written in service.js
  - Static middleware for frontend - done, service.js serves up files form public
  - Calls to third party endpoints - I bring in a random inspirational quote on my feed page.
  - Backend service endpoints - Endpoints to get and update user's goals and pr
  - Frontend calls service endpoints - used fetch to implement my endpoints
 
  ## Login Deliverable
  - MongoDB Atlas Database - created, data is stored in a collection named startup
  - Endpoints to create a new user make a new document in MongoDB
  - Authentication supported - Done - Login and Logout supported
  - MongoDB stores user credentials and their goals they enter when the "Save All" button is pressed
 
  ## WebSocket Deliverable
  - Backend listens for WS connection - done.
  - Frontend makes WS connection - done - connection is made from charts.html and feed.html
  - Data sent over WS connection - done.
  - Data displayed - done, data is displayed on feed.html
 
  ## React Deliverable
  Switched over to react and also combined some elements of the UI - for example, now you type goals/prs/ time to calculate in the same field, and use different buttons to say whether you want to submit it as a goal or a pr
  - Bundled and transpiled - done
  - Components - login, the tables on charts, and feed are all made of various components
  - Router - routes different urls to bring in the matching components
  - Hooks - I used Several UseState and UseEffect Hooks for loading user data and updating info when it is changed. 
