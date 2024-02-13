import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BrowseStories() {
    const [users, setUsers] = useState([]);
    const [selectedValue, setSelectedValue] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:2000/")
            .then((res) => res.json())
            .then((data) => {
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

    return (
        <div>
            <select onChange={handleSort}>
                <option value="">Select Author</option>
                {users.map((data) => (
                    <option key={data.id} value={data.author}>
                        {data.author}
                    </option>
                ))}
            </select>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Place of Origin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((data) => (
                            <tr key={data.id}>
                                <td>{data.title}</td>
                                <td>{data.author}</td>
                                <td>{data.PlaceOfOrigin}</td>
                                <td><Link to={"/AddStory"}><button>Edit</button></Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Link to={"/"}><h1>Back</h1></Link>
        </div>
    );
}
