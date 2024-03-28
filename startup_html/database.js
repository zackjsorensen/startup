
const { MongoClient, MongoDBNamespace } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
// const url = 'ongodb+srv://zackjs:dummypass@cluster0.lq6ddnj.mongodb.net/?';

const client = new MongoClient(url);
const db = client.db('startup');
const coll = db.collection('startup');

console.log(1+1);

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

// functions interacting with mongodb

// getuser(email)
function getUser(email){

}

// getuserbytoken(token) -- cookie shortcut

//createuser(email, password)
function createUser(email, password) {

}

// getUserStats
function getUserStats(username) {
  return coll.findOne({username: username});

}

function tester() {
  console.log(coll.findOne({username: "dummy"}));
  
}
//add pr

//remove pr

//get prs

//add goal

//remove goal

//get goals

module.exports = {
  getUserStats
};