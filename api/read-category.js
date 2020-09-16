const uris = "mongodb+srv://rajeshmondal9007@gmail.com:rajesh@2000@cluster0.gaifp.mongodb.net/test?retryWrites=true&w=majority";

// Import Dependencies
const url = require('url')
const MongoClient = require('mongodb').MongoClient

// Create cached connection variable
let cachedDb = null

// A function for connecting to MongoDB,
// taking a single parameter of the connection string
async function connectToDatabase(uri) {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb
  }

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db(url.parse(uri).pathname.substr(1))

  // Cache the database connection and return the connection
  cachedDb = db
  return db
}

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
  // Get a database connection, cached or otherwise,
  // using the connection string environment variable as the argument
  const db = await connectToDatabase(uris)

  // Select the "users" collection from the database
  const collection = await db.collection('category')

  // Select the users collection from the database
  const users = await collection.find({}).toArray()

  // Respond with a JSON string of all users in the collection
  res.send(users)
}