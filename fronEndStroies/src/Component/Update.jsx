import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Updatecss.module.css';

export default function UpdateStory() {
    const { id } = useParams();
    const [story, setStory] = useState({
        title: '',
        author: '',
        PlaceOfOrigin: '',
        Description: ''
    });

    const Navigate = useNavigate();

    useEffect(() => {
        fetchStory();
    }, [id]);

    const fetchStory = async () => {
        try {
            const response = await axios.get(`https://s47-unique-stroies.onrender.com/${id}`);
            setStory(response.data);
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
            const respon = await axios.put(`https://s47-unique-stroies.onrender.com/editStory/${id}`, story);

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
        <div className={styles.container}>
            <h1>Update Story</h1>
            <label>Title:</label>
            <input type="text" name="title" value={story.title} onChange={handleInputChange} />

            <label>Author:</label>
            <input type="text" name="author" value={story.author} onChange={handleInputChange} />

            <label>Place of Origin:</label>
            <input type="text" name="PlaceOfOrigin" value={story.PlaceOfOrigin} onChange={handleInputChange} />

            <label>Description:</label>
            <input type="text" name="Description" value={story.Description} onChange={handleInputChange} />

            <button onClick={handleUpdate}>Update Story</button>
        </div>
    );
}
