const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/diary', {useNewUrlParser: true})
    .catch(e => {
        console.error('Connection error', e.message)
    })



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://admin:<password>@cluster0.kquqp.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });

// mongoose
//     .connect('mongodb+srv://admin:<Nantack3t!>@cluster0.kquqp.mongodb.net/diary?retryWrites=true&w=majority', {useNewUrlParser: true})
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })

// mongodb+srv://admin:<password>@cluster0.kquqp.mongodb.net/<dbname>?retryWrites=true&w=majority

const db = mongoose.connection

module.exports = db