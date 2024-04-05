
const { MongoClient, MongoDBNamespace } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
// const url = 'ongodb+srv://zackjs:dummypass@cluster0.lq6ddnj.mongodb.net/?';

const client = new MongoClient(url);
const db = client.db('startup');
const coll = db.collection('startup');





// functions interacting with mongodb

// getuser(email)
function getUser(email){
  return coll.findOne({email: email});
}

function getUserByToken(token){
  return coll.findOne({token: token});
}

//createuser(email, password)
async function createUser(email, password) {
  // we need to hash the pash
  const hashPash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: hashPash,
    token: uuid.v4(),
    prs: "",
    goals: ""
  };
  await coll.insertOne(user);
  return user;
}

// update goals
async function saveGoals(token, goals, prs) {
  await coll.updateOne(
    {token:token},
    { $set: {goals: goals, prs: prs}
    }
  )
  return getUserByToken(token);
}


module.exports = {
  getUser,
  createUser,
  getUserByToken,
  saveGoals
};