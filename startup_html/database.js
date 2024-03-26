
const { MongoClient, MongoDBNamespace } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;


const client = new MongoClient(url);
const db = client.db('startup');



(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

// functions interacting with mongodb

// getuser(email)

// getuserbytoken(token) -- cookie shortcut

//createuser(email, password)

// getUserStats
function getUserStats(username) {
  return db.findOne({username: username});

}

function tester() {
  console.log(db.findOne({username: "dummy"}));
  
}
//add pr

//remove pr

//get prs

//add goal

//remove goal

//get goals