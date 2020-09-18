import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../Home/Home';
import './HomePlaces.css'

const HomePlaces = () => {
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
                <h1>{ showPlaceDetail ? name : 'Niloy Travel Guru'}</h1>
                <h5>{ showPlaceDetail ? details : 'Choss a Service'}</h5>
                {
                    showPlaceDetail && 
                    <button onClick={handleBooking} className='btn btn-warning'>Booking <FontAwesomeIcon icon={faArrowRight} />
</button>
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

export default HomePlaces;