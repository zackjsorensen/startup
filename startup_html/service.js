const express = require('express');
const app = express();

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
res.send(JSON.stringify(goals));
});

console.log(5+3);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

let goals = [5, "0:30:33", "04:33"];

