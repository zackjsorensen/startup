const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');

// we handle all http requests here, if needed we call functions in database.js 
//                                                   to communicate with mongo


// The service port. In production the frontend code is statically hosted by the service on the same port.
const port =  4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));
const apiRouter = express.Router();
app.use(`/api`, goalRouter);
// const prRouter = express.Router();
// app.use('/pr', prRouter);

// Get, post goals


//test router to return stats given an email
apiRouter.get('/stats', (_req, res) => {
  const username = _req.body.email
  const stats = DB.getUserStats(username);
  console.log(stats);
});

goalRouter.post('/', (_req, res) => {
  // receive and update here
  console.log("Goals saved to service memory:");
 
  goals = (_req.body);
  console.log(goals);
  
  res.send(goals);
});

// Get, post prs

prRouter.get('/', (_req, res) => {
  res.send(prs)
  });
  
  prRouter.post('/', (_req, res) => {
    // receive and update here
    console.log("PRs saved to service memory:");
   
    prs = (_req.body);
    console.log(prs);
    
    res.send(prs);
  });


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });




 