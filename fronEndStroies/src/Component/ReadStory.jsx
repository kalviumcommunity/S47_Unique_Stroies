import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Updatecss.module.css';
import { Link } from 'react-router-dom';

export default function ReadStory() {
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

  return (
    <div className={styles.container}>
      <h1>{story.title}</h1>
      <p>Author: {story.author}</p>
      <p>Place of Origin: {story.PlaceOfOrigin}</p>
      <p>Description: {story.Description}</p>
      <Link to="/browseStories"><button>Back</button></Link>
    </div>

  );
}
