import axios from 'axios';
import React from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

function Delete() {
    const { userId } = useParams();
    const nav = useNavigate();

    function deleteUser(event) {
        event.preventDefault(); 
        console.log(userId);
        axios.delete(`http://127.0.0.1:8000/person_app/person/${userId}`)
            .then(response => {
                console.log('User deleted successfully:', response);
                nav('/show');
            })
            .catch(error => {
                console.error('Error deleting user:', error);

            });
    }

    return (
        <div className="container text-center">
    <h1>Delete Confirmation</h1>
    <form onSubmit={deleteUser}>
        <h2>Are you sure you want to delete the record?</h2>
        <div className="btn-group" role="group">
            <button type="submit" className="btn btn-danger">YES</button>
            <NavLink to="/show" className="btn btn-secondary">NO</NavLink>
        </div>
    </form>
</div>

    );
}

export default Delete;
