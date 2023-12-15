const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()
const connectDB = require('./db/connect')
const cors = require('cors');
const port = process.env.PORT||3000

const File = require('./model/File')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.status(200).json({msg:"Successful"})
})

app.post('/', async (req, res) => {
    const file = await File.create(req.body)
    res.sendStatus(200); // Send a success status back to the Python script
});


const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log('Connection to db successfull')
            console.log(`Server running at http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start()