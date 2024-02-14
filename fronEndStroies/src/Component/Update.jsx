import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateStory() {
    const  {id}  = useParams();
    const [story, setStory] = useState({
        title: '',
        author: '',
        PlaceOfOrigin: ''
    });
        
    const Navigate = useNavigate();

    useEffect(() => {
        fetchStory();
    }, [id]);

    const fetchStory = async () => {
        try {
            const response = await axios.get(`http://localhost:2000/${id}`);
            console.log(response.data)
            setStory(response.data);
            console.log(story)
        } catch (error) {
            console.error('Error fetching story:', error.message);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStory({
            ...story,
            [name]: value
        });
    };

    const handleUpdate = async () => {
        try {
            const respon = await axios.put(`http://localhost:2000/editStory/${id}`, story);

            if (respon.status === 200) {
                Navigate('/');
            } else {
                console.error('Error updating story:', respon.statusText);
            }
        } catch (error) {
            console.error('Error updating story:', error.message);
        }
    };

    return (
        <div>
            <h1>Update Story</h1>
            <label>Title:</label>
            <input type="text" name="title" value={story.title} onChange={handleInputChange} /><br />

            <label>Author:</label>
            <input type="text" name="author" value={story.author} onChange={handleInputChange} /><br />

            <label>Place of Origin:</label>
            <input type="text" name="PlaceOfOrigin" value={story.PlaceOfOrigin} onChange={handleInputChange} /><br />

            <button onClick={handleUpdate}>Update Story</button>
        </div>
    );
}
