import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataShowing() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3004/notes')
            .then(response => setUsers(response.data))
            .catch(error => {
                console.error('Error fetching users:', error);
                setError('An error occurred while fetching users. Please try again later.');
            });
    }, []);

    return (
        <div>
            {error ? (
                <div>Error: {error}</div>
            ) : (
                <table>x
                    <thead>
                        <tr>
                            <th>Title</th> 
                            <th>Created On</th>
                            <th>Created By</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user.Title}</td>
                                <td>{user.Created_By}</td>
                                <td>{user.Created_Date}</td>
                                <td>{user.Status}</td>
                                <td>
                                    <button className='edit' type='button'>Edit</button>
                                    <button className='delete' type='button'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
