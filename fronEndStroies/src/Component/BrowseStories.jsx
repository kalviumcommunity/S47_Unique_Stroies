import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Browsecss.module.css';
import { useNavigate } from 'react-router-dom';

export default function BrowseStories() {
  const [users, setUsers] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    fetch("https://s47-unique-stroies.onrender.com/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        setFilteredData(data);
      });
  }, []);

  const handleSort = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    const newData = value ? users.filter((data) => data.author === value) : users;
    setFilteredData(newData);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://s47-unique-stroies.onrender.com/deleteStory/${id}`);

      if (response.status === 200) {
        const updatedData = filteredData.filter((data) => data._id !== id);
        setFilteredData(updatedData);
      } else {
        console.error('Error deleting story:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting story:', error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.selectWrapper}>
        <select onChange={handleSort} className={styles.select}>
          <option value="">Select Author</option>
          {users.map((data) => (
            <option key={data._id} value={data.author}>
              {data.author}
            </option>
          ))}
        </select>
      </div>
      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Place of Origin</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data) => (
              <tr key={data._id}>
                <td>{data.title}</td>
                <td>{data.author}</td>
                <td>{data.PlaceOfOrigin}</td>
                <td><Link to={`/read/${data._id}`}><button>Read Story</button></Link></td>
                <td>
                  <button onClick={() => Navigate(`/edit/${data._id}`, { state: { story: data } })} className={styles.editButton}>Edit</button>
                  <button onClick={() => handleDelete(data._id)} className={styles.deleteButton}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to={"/"} className={styles.backLink}>
        <button className={styles.backButton}>Back</button>
      </Link>
    </div>
  );
}
