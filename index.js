const express = require('express')
const app = express()
const cors = require('cors')
const bodyparser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;

require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0tnqn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const port = process.env.PORT || 4505

app.use(express.json());
app.use(cors());

console.log(process.env.DB_USER);



const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const products = client.db("E-bazar").collection("products");

    app.get('/events', (req, res) => {
        products.find( )
        .toArray((err, items) =>{
            res.send(items)
        })
    })



    app.post('/admin', (req, res) => {
        const newProduct = req.body;
        products.insertOne(newProduct)
            .then(result => {
                console.log('result', result.insertedCount);
                res.send(result.insertedCount > 0)
            })



    })

});

app.get('/', (req, res) => {
    res.send('hi server')
})



app.listen( process.env.PORT || port);