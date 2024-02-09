import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function BrowseStories() {
        const [users, setUsers] = useState([])
        useEffect(()=>{
            fetch("http://localhost:2000/")
            .then((res) => res.json())
            .then((data) => setUsers(data))
        },[])
    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Tittle</th>
                            <th>Author</th>
                            <th>Place of Origin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((data) => {
                            return (
                                <tr>
                                    <td>{data.title}</td>
                                    <td>{data.author}</td>
                                    <td>{data.PlaceOfOrigin}</td>
                                    <td><Link to={"/AddStory"}><button>Edit</button></Link></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <Link to={"/"}><h1>Back</h1></Link>
        </div>
    )
}
