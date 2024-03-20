const express = require('express');
const app = express();

let prs = [];
let goals = [];

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port =  4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));
const goalRouter = express.Router();
app.use(`/goal`, goalRouter);

// post, get, delete goals

goalRouter.get('/', (_req, res) => {
res.send(goals)
});

goalRouter.post('/', (_req, res) => {
  // receive and update here
  console.log("Goals saved to service memory:");
 
  goals = (_req.body);
  console.log(goals);
  
  res.send(goals);
});

goalRouter.delete('/', (_req, res) => {
  // delete goal here
  res.send(goals);
});





app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

// let goals = [[5, "0:30:33", "04:33"], [2, "0:12:23", "06:22"]];


 