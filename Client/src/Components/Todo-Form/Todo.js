import React, { useState } from 'react';
import axios from 'axios';

function Form() {
    const [Title, setTitle] = useState('');
    const [Created_By, setCreatedBy] = useState('');
    const [Created_Date, setCreatedOn] = useState('');
    const [Content, setContent] = useState('');
    const [Status, setStatus] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = {
            Title,
            Created_By,
            Created_Date,
            Content,
            Status
        };
        try {
            // Make a POST request to server
            const response = await axios.post('http://localhost:3004/notes', userData);
            console.log('Response:', response.data);

        } catch (error) {
            // Handle errors
            console.error('Error:', error);
            setError('An error occurred while processing your request. Please try again later.');
        }
    };

    return (
        <div className='form'>
            <div className='App2'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} />
                    <label htmlFor="createdOn">Created On</label>
                    <input type="text" className="form-control" id="createdOn" placeholder="Enter Created On" onChange={(e) => setCreatedOn(e.target.value)} />
                    <label htmlFor="createdBy">Created By</label>
                    <input type="text" className="form-control" id="createdBy" placeholder="Enter Created By" onChange={(e) => setCreatedBy(e.target.value)} />
                    <label htmlFor="content">Content</label>
                    <input type="text" className="form-control" id="content" placeholder="Enter Content" onChange={(e) => setContent(e.target.value)} />
                    <label htmlFor="status">Status</label>
                    <input type="date" className="form-control" id="status" onChange={(e) => setStatus(e.target.value)} />
                    <br />
                    <button type="submit">Submit</button>
                </form>
                {error && <div>Error: {error}</div>}
            </div>
        </div>
    );
}

export default Form;
