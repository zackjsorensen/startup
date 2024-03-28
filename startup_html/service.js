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
app.use(`/api`, apiRouter);
// const prRouter = express.Router();
// app.use('/pr', prRouter);

// Get, post goals

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

//test router to return stats given an email
apiRouter.get('/stats', (_req, res) => {
  const username = _req.body.email
  const stats = DB.getUserStats(username);
  console.log(stats);
  res.send("Testing Testing"); // works
});

apiRouter.get('/test', async(_req, res) => {
  const holder = await DB.getUserStats("dummy")
  console.log(holder);
  res.send(holder);
});


// goalRouter.post('/', (_req, res) => {
//   // receive and update here
//   console.log("Goals saved to service memory:");
 
//   goals = (_req.body);
//   console.log(goals);
  
//   res.send(goals);
// });

// // Get, post prs

// prRouter.get('/', (_req, res) => {
//   res.send(prs)
//   });
  
//   prRouter.post('/', (_req, res) => {
//     // receive and update here
//     console.log("PRs saved to service memory:");
   
//     prs = (_req.body);
//     console.log(prs);
    
//     res.send(prs);
//   });


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });




 