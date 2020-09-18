import React, { useContext } from 'react';
import logo from '../../Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../Home/Home';
import firebaseConfig from '../Login/firebase.config';




const Hader = () => {
    const [places, handleSelectPlace, detail, user, setUser] = useContext(UserContext);



    return (
        <div className='m-4 d-flex justify-content-center align-items-center px-5'>
            <img style={{width:'120px'}}  src={logo} alt=""/>
            <div className="input-group ">
                <div className="input-group-prepend">
                  <FontAwesomeIcon style={{fontSize:'25px'}} className='text-white m-2' icon={faSearch} />
                </div>
                <input type="text" style={{backgroundColor:'#ffffff4d'}} className="form-control color-white" placeholder="Search your destination" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <button className="btn mx-1 text-white">News</button>
            <Link to='/home' className="btn mx-1 text-white">Destination</Link>
            <button className="btn mx-1 text-white">Blog</button>
            <button className="btn mx-1 text-white">Contact</button>
            {
                user.success 
                ? <h6>{user.name}</h6>
                : <Link to='/login' className="btn btn-warning mx-1 text-dark">Login</Link>
            }
        </div>
    );
};

export default Hader;