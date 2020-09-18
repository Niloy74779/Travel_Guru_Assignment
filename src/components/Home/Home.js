import React, { createContext, useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import Login from '../Login/Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Checkout from '../Checkout/Checkout';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import HomePlaces from '../HomePlaces/HomePlaces';
import Hader from '../Hader/Hader';
import hotelData from '../../fakeData/hotelData/hotelData';
import Booking from '../Booking/Booking';
import NotFound from '../NotFound/NotFound';

export const UserContext = createContext();

const Home = () => {
    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
        error:'',
        success:false,
        isLoggedIn:false,
    })
    const [places, setPlaces] = useState([]);
    const [detail, setDetail] = useState({});
    const [showPlaceDetail, setShowPlaceDetail] = useState(false)

    useEffect(() => {
        setPlaces(fakeData)
    }, []);

    const handleSelectPlace = (image) => {
        const placeDetail = places.find(place => place.image ===  image);
        setDetail(placeDetail);
        setShowPlaceDetail(true)
    }
    return (
        <UserContext.Provider value={[places, handleSelectPlace, detail, user, setUser, showPlaceDetail]}>
            <Router>
               <Hader/>
                <Switch>
                    <Route path='/home'>
                        <HomePlaces/>
                    </Route>
                    <Route exact path='/'>
                        <HomePlaces/>
                    </Route>
                    <Route path='/book'>
                        <Booking/>
                    </Route>
                    <Route path='/login'>
                        <Login></Login>
                    </Route>
                    <PrivateRoute path='/checkout'>
                        <Checkout></Checkout>
                    </PrivateRoute>
                    <Route path='*'>
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
};

export default Home;