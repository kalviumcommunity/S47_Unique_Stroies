import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Addcss.module.css';

function AddStory() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [PlaceOfOrigin, setPlaceOfOrigin] = useState('');
  const [Description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleTittle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handlePlaceOfOrigin = (e) => {
    setPlaceOfOrigin(e.target.value);
  };

  const handleDescribe = (e) => {
    setDescription(e.target.value);
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://s47-unique-stroies.onrender.com/addStory', {
        title,
        author,
        PlaceOfOrigin,
        Description,
      });

      setSuccessMessage('Story added successfully!');
      // Reset form fields
      setTitle('');
      setAuthor('');
      setPlaceOfOrigin('');
      setDescription('');
    } catch (error) {
      console.error('Error adding story:', error);
      alert(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleAdd} className={styles.form}>
        <h1>ADD STORY</h1>
        <div>
          <label>Title</label>
          <input type="text" placeholder="eg: The Golden Time" value={title} onChange={handleTittle} required />
        </div>
        <div>
          <label>Author</label>
          <input type="text" placeholder="eg: Anuj" value={author} onChange={handleAuthor} required />
        </div>
        <div>
          <label>Place of Origin</label>
          <input type="text" placeholder="eg: India" value={PlaceOfOrigin} onChange={handlePlaceOfOrigin} required />
        </div>
        <div>
          <label>Describe</label>
          <textarea placeholder="When I was.." value={Description} onChange={handleDescribe} />
        </div>
        <button type="submit">Add</button>
      </form>
      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      <div>
        <Link to="/">
          <button className={styles.back}>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default AddStory;
