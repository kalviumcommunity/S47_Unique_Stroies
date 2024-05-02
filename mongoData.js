



const { MongoClient } = require('mongodb');
// const connection_string = "mongodb+srv://anujsahu:1MBDz4bok7B5Ixug@cluster0.qomzy21.mongodb.net/";
const client = new MongoClient(connection_string, { useNewUrlParser: true, useUnifiedTopology: true });

async function insertStroies() {
try {
    await client.connect();

    
    const db = client.db("Unique_Stories");

    const Stroies = [
    {
        "StoryNo":"1",
        "title": "The man at the market",
        "author": "Leslie Wagner",
        "PlaceOfOrigin": "Arkansas",
        
    },
    {
        "StoryNo":"2",
        "title": "JIm and The Job",
        "author": "Miranda MacLean",
        "PlaceOfOrigin": "Michigan",
        
    },
    {
        "StoryNo":"3",
        "title": "A family's food angel",
        "author": "Jamie Boleyn",
        "PlaceOfOrigin": "Idaho",
        
    },
    {
        "StoryNo":"4",
        "title": "Color me amazed",
        "author": "Marilyn Kinsella",
        "PlaceOfOrigin": "Canada",
        
    },
    {
        "StoryNo":"5",
        "title": "Seven miles for me",
        "author": "Clarence W.",
        "PlaceOfOrigin": "Kentucky",
        
    },
    {
        "StoryNo":"6",
        "title": "A little lift",
        "author": "Donna Moerie",
        "PlaceOfOrigin": "North Carolina",
        
    },
    {
        "StoryNo":"7",
        "title": "My grandaughter's dress",
        "author": "Stack Lee",
        "PlaceOfOrigin": "Maryland",
        
    },
    {
        "StoryNo":"8",
        "title": "White Shoulders",
        "author": "Media Stookbury",
        "PlaceOfOrigin": "Tennessee",
        
    },
    {
        "StoryNo":"9",
        "title": "Breakin bread",
        "author": "Liliana ",
        "PlaceOfOrigin": "Arizona",
        
    },
    {
        "StoryNo":"10",
        "title": "Something to give",
        "author": "Basha",
        "PlaceOfOrigin": "Florida",
        
    },
    {
        "StoryNo": "11",
        "title": "ExampleTitle",
        "author":"ExampleAuthor",
        "PlaceOfOrigin":"Example"
    }
    ];

    const result = await db.collection('UniqueStroies').insertMany(Stroies);
    
    console.log(`${result.insertedCount} documents inserted successfully.`);
} finally {
    await client.close();
}
}


insertStroies();
