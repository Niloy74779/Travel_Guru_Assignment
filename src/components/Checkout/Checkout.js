import React, { useContext } from 'react';
import { UserContext } from '../Home/Home';

const Checkout = () => {
    const [places, handleSelectPlace, detail, user, setUser] = useContext(UserContext);
    // console.log(detail);
    return (
        <div className='px-5'>
            <div className="col-md-6">
                <h3 className='ml-3 mb-4'>Stay in {detail.name}</h3>
                <div className="d-flex justify-content-center align-items-center my-2">
                    <div className="col-md-5">
                        <img className='w-100' src='https://iili.io/2oq714.png' alt=""/>
                    </div>
                    <div className="col-md-7">
                        <h5>Light bright airy stylish apt & safe peaceful stay</h5>
                        <p className='mb-0'>4 guest 2bedrooms 2beds 2baths <br/> Wif Air conditiong Kitchen <br/> Cancellation fexibility availiable</p>
                        <img style={{width:'20px'}} src='https://iili.io/2oqMhu.png' alt=""/>
                        <span className='font-weight-bold ml-1'>4.9(20)</span>
                        <span><span className='font-weight-bold ml-5'>$34/</span>night</span>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="d-flex justify-content-center align-items-center my-4">
                    <div className="col-md-5">
                        <img className='w-100' src='https://iili.io/2ouTIp.png' alt=""/>
                    </div>
                    <div className="col-md-7">
                        <h5>Apartment in Lost Panorama</h5>
                        <p className='mb-0'>4 guest 2bedrooms 2beds 2baths <br/> Wif Air conditiong Kitchen <br/> Cancellation fexibility availiable</p>
                        <img style={{width:'20px'}} src='https://iili.io/2oqMhu.png' alt=""/>
                        <span className='font-weight-bold ml-1'>4.8(10)</span>
                        <span><span className='font-weight-bold ml-5'>$52/</span>night</span>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="d-flex justify-content-center align-items-center ">
                    <div className="col-md-5">
                        <img className='w-100' src='https://iili.io/2ouevj.png' alt=""/>
                    </div>
                    <div className="col-md-7">
                        <h5>AR Lounge & Pool (r&r + b&b)</h5>
                        <p className='mb-0'>4 guest 2bedrooms 2beds 2baths <br/> Wif Air conditiong Kitchen <br/> Cancellation fexibility availiable</p>
                        <img style={{width:'20px'}} src='https://iili.io/2oqMhu.png' alt=""/>
                        <span className='font-weight-bold ml-1'>4.9(25)</span>
                        <span><span className='font-weight-bold ml-5'>$44/</span>night</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;