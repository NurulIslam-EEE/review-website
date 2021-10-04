import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../img/error.png'

const NotFound = () => {
    return (
        <div>
            <img className='img-fluid' src={error} alt="" />
            <h1>Page Not Found!</h1>
            <Link to='/home'> <button>Back to home</button> </Link>
        </div>
    );
};

export default NotFound;