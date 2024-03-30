import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function Show() {
    const [users, setUsers] = useState([]); 
    async function fetchData() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/person_app/person/'); 
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Profile Pic</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Gender</th>
                        <th>Pincode</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr >
                            <td><img src={`http://localhost:8000${user.profile_pic}`} alt="Profile Pic" style={{ width: '100px', height: '100px' }} /></td>
                            {/* <td>{user.profile_pic}</td> */}
                            <td>{user.fname} {user.lname}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.city}</td>
                            <td>{user.gender}</td>
                            <td>{user.pincode}</td>
                            <td>
                                <NavLink to={`/update/${user.id}`}><button className='btn btn-outline-success'>Update</button></NavLink>
                                <NavLink to={`/delete/${user.id}`}><button className='btn btn-outline-danger'>Delete</button></NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Show;




