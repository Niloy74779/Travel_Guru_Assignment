import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../Home/Home';
import './Places.css'

const Places = () => {
    // const showPlaceDetail = false;
    const [places, handleSelectPlace, detail, user, setUser, showPlaceDetail] = useContext(UserContext)
    const {name, details} = detail;
    const history = useHistory();
    const handleBooking = () => {
        history.push('/book')
    }
    return (
        <div className='d-flex justify-content-center align-items-center mt-5 px-5'>
            <div className='col-md-4 '>
                <h1>{ showPlaceDetail ? name : 'Welcome to Travel Guru'}</h1>
                <h5>{ showPlaceDetail ? details : 'Click on the image to set the destination'}</h5>
                {
                    showPlaceDetail && 
                    <button onClick={handleBooking} className='btn btn-warning'>Booking</button>
                }
            </div>
            <div className='col-md-8 d-flex juctify-content-between'>
                {
                    places.map(place => <img  onClick={() => handleSelectPlace(place.image)} className='w-25 m-3 destination-img' src={place.image} alt=""/>)
                }

            </div>
        </div>
    );
};

export default Places;