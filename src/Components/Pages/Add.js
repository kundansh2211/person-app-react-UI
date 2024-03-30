import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Add() {
    const { register, handleSubmit } = useForm();
    const nav = useNavigate();

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('profile_pic', data.profile_pic[0]); 
            formData.append('fname', data.fname);
            formData.append('lname', data.lname);
            formData.append('email', data.email);
            formData.append('address', data.address);
            formData.append('city', data.city);
            formData.append('gender', data.gender);
            formData.append('pincode', data.pincode);

            await axios.post('http://127.0.0.1:8000/person_app/person/', formData);

            nav('/show');
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <>
            <div className="container mt-5 bg bg-light">
    <h1 className="text-center mb-4">Person Registration Form</h1>
    <form encType='multipart/form-data' onSubmit={handleSubmit(onSubmit)} className=''>
        <div className="mb-3">
            <label htmlFor='profilepic' className="form-label">Upload Your Profile Picture Here</label>
            <input type='file' accept='image/*' className="form-control" id='profilepic' name='profile_pic' {...register('profile_pic')} />
        </div>
        <div className="mb-3">
            <label htmlFor='fn' className="form-label">First Name</label>
            <input id='fn' name='fname' className="form-control" {...register('fname')} />
        </div>
        <div className="mb-3">
            <label htmlFor='ln' className="form-label">Last Name</label>
            <input id='ln' name='lname' className="form-control" {...register('lname')} />
        </div>
        <div className="mb-3">
            <label htmlFor='email' className="form-label">Email</label>
            <input id='email' name='email' className="form-control" {...register('email')} />
        </div>
        <div className="mb-3">
            <label htmlFor='add' className="form-label">Address</label>
            <input id='add' name='address' className="form-control" {...register('address')} />
        </div>
        <div className="mb-3">
            <label htmlFor='ct' className="form-label">City</label>
            <input id='ct' name='city' className="form-control" {...register('city')} />
        </div>
        <div className="mb-3">
            <label className="form-label">Select Your Gender :</label>
            <div className="form-check">
                <input id='male' type='radio' className="form-check-input" value='male' {...register('gender')} />
                <label htmlFor='male' className="form-check-label">Male</label>
            </div>
            <div className="form-check">
                <input id='female' type='radio' className="form-check-input" value='female' {...register('gender')} />
                <label htmlFor='female' className="form-check-label">Female</label>
            </div>
            <div className="form-check">
                <input id='other' type='radio' className="form-check-input" value='other' {...register('gender')} />
                <label htmlFor='other' className="form-check-label">Other</label>
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor='pin' className="form-label">Pincode</label>
            <input id='pin' name='pincode' className="form-control" {...register('pincode')} />
        </div>
        <button type='submit' className='btn btn-outline-success me-2'>Add Person</button>
        <button type='reset' className='btn btn-outline-warning'>Reset</button>
    </form>
</div>

        </>
    );
}

export default Add;
