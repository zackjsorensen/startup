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
