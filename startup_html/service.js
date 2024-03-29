const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const { getCiphers } = require('crypto');
const port =  4000;

// we handle all http requests here, if needed we call functions in database.js to communicate with mongo

// JSON body parsing using built-in middleware
app.use(express.json());
app.use(cookieParser());

// Serve up the frontend static content hosting
app.use(express.static('public'));
app.set('trust proxy', true);

const apiRouter = express.Router();
app.use(`/api`, apiRouter);



// Create Auth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);
    res.send({ id: user._id});
    return;
  }
});

// Login
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    console.log("User found, checking password");
    // check password
    if (await bcrypt.compare(req.body.password, user.password)) {
      // we send them a cookie with the id found in their mongo doc
      console.log("password matches, preparing cookie...");
      setAuthCookie(res, user.token);
      res.send({ id: user._id});
      return;
    }
    res.status(401).send({msg: 'Bad Password'});
    
  } else {
  // either bad username or bad password
  res.status(401).send({msg: 'Unauthorized'});}
});

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

apiRouter.get('/prs', async (req, res) => {
  const stats = await DB.getUserByToken(req.cookies['token']); // returns the user's doc
  if (stats) {
    const prs = stats.prs;
    res.send(prs);
  } else {
    res.send({msg: 'Unable to retrieve data'});
  }
  
})

apiRouter.get('/goals', async (req, res) => {
  const stats = await DB.getUserByToken(req.cookies['token']); // returns the user's doc
  if (stats) {
    const goals = stats.goals;
    res.send(goals);
  } else {
    res.send({msg: 'Unable to retrieve data'});
  }
  
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });




 