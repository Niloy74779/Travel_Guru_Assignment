import React, { createContext, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Places from '../Places/Places';
import fakeData from '../../fakeData/fakeData'
import NoMatch from '../NoMatch/NoMatch';
import Book from '../Book/Book';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import Checkout from '../Checkout/Checkout';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import hotelFakeData from '../../fakeData/hotelFakeData/hotelFakeData';

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
               <Navbar></Navbar>
                <Switch>
                    <Route path='/home'>
                        <Places></Places>
                    </Route>
                    <Route exact path='/'>
                        <Places></Places>
                    </Route>
                    <Route path='/book'>
                        <Book></Book>
                    </Route>
                    <Route path='/login'>
                        <Login></Login>
                    </Route>
                    <PrivateRoute path='/checkout'>
                        <Checkout></Checkout>
                    </PrivateRoute>
                    <Route path='*'>
                        <NoMatch></NoMatch>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
};

export default Home;