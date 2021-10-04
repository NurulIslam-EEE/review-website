import React from 'react';
import user1 from '../../img/user-1.jpg'
import './Testimonial.css'

const Testimonials = () => {
    return (
        <div>
            <h1>Reviews</h1>
            <div>
                <div className='d-flex'>
                    <img className='user' src={user1} alt="" />
                    <h3>Prachi Desai </h3>
                </div>

                <p> “I want to thank the Placement team at IIDE. Not only did they prepare me for interviews but they also guided me towards all career opportunities and helped me choose what’s best for me. </p>
            </div>
        </div>
    );
};

export default Testimonials;