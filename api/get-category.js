
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rajeshmondal9007@gmail.com:Rajesh@2000@cluster0.gaifp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


module.exports = (req, res)=>{
  res.send({
    status: 200,
    data: "Rajesh Rajesh Mondal"
  })
}