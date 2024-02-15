const express = require('express');
const mongoose = require('mongoose');
const valideter = require('./dataValidate.js');
const cors = require('cors');
const userModel = require('./Users.js');
const port = 2000;
const jwt = require('jsonwebtoken')
require('dotenv').config()


const app = express();
app.use(express.json());
app.use(cors());

const startDatabase = async () => {
    try {
        await mongoose.connect(process.env.URL, {dbName:process.env.DBNAME});
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

app.get('/:id', (req, res) => {
    const userId = req.params.id;
    userModel.findById(userId)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ error: err }));
})



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

app.post("/login",(req,res)=>{
    const Key = process.env.KEY ;
    const token = jwt.sign({data:req.body},Key)
    res.send(token)
})

app.delete('/deleteStory/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        
        const deletedUser = await userModel.findByIdAndDelete(userId);
        
        if (!deletedUser) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting story:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.put('/editStory/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        if (!valideter(req.body)) {
            res.status(400).json({ error: 'Invalid data' });
            return;
        }

        const updatedUser = await userModel.findByIdAndUpdate(userId, req.body, { new: true });

        if (!updatedUser) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        res.json(updatedUser);
    } catch (error) {
        console.error('Error editing story:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});





const startServer = () => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

startDatabase().then(()=>startServer());