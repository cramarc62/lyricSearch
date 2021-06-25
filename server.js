const path= require('path')
const mongoose=require('mongoose')
const express= require('express');

//const connectDB=require('./db')
//connectDB();
//const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://arif:arif1234@cluster0.00slz.mongodb.net/shoppingCartDB?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//client.connect(err => {
  //const collection = client.db("shoppingCartDB").collection("items");
  // perform actions on the collection object
  //client.close();
//});
const DB=require('./config/keys').mongoURI;
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>console.log('mongoDB connected...'))
  .catch(err=> console.log(err))

//const homePage=require('./routes/route_homePage');
const app= express();

app.use(express.json());

//app.use('/homepage',homePage)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

const PORT=process.env.PORT || 5000;
app.listen(PORT, console.log(`server running on port ${PORT}`))