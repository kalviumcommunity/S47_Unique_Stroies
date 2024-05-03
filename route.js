const express = require('express');
const story = require('./Data.json');
const app = express();
const port = 3000;






app.use(express.json()); 

app.get("/", (req, res) => {
    res.send(story);
});

app.post('/', (req, res) => {
    const newStory = {
        "title": req.body.title,
        "author": req.body.author,
        "PlaceOfOrigin": req.body.PlaceOfOrigin
    };
    story.push(newStory);
    res.status(200).send(newStory);
});

app.put('/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const update = req.body;
    if (index >= 0 && index < story.length) {
        story[index] = update;
        res.json(story);
    } else {
        res.status(404).json({ error: "Index out of bounds" });
    }
});

app.delete('/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < story.length) {
        story.splice(index, 1);
        res.json(story);
    } else {
        res.status(404).json({ error: "Index out of bounds" });
    }
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = app;
