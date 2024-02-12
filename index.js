const express = require('express');
const mongoose = require('mongoose');
const valideter = require('./dataValidate.js');
const cors = require('cors');
const userModel = require('./Users.js');
const port = 2000;



const app = express();
app.use(express.json());
app.use(cors());

const startDatabase = async () => {
    try {
        await mongoose.connect("mongodb+srv://officialanuj004:HzdSHMWezDvO5zZS@cluster0.xqpttwd.mongodb.net/?retryWrites=true&w=majority", { dbName: "Unique"});
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

app.get('/', (req, res) => {
    userModel.find({})
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ error: err }));
});



app.post('/addStory', async (req, res) => {
    try {
        if (!valideter(req.body)) {
            res.status(400).json({ error: 'Invalid data' });
            return;
        }
        const newUser = await userModel.create(req.body);
        res.json(newUser);
    } catch (error) {
        console.error('Error adding story:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const startServer = () => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

startDatabase().then(()=>startServer());