
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rajeshmondal9007@gmail.com:Rajesh@2000@cluster0.gaifp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var data = client.connect(err => {
  const collection = client.db("test").collection("category");
  // perform actions on the collection object
  return collection
  client.close();
});


module.exports = (req, res)=>{
  res.send({
    status: 200,
    data: data
  })
}