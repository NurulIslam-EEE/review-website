import React from 'react';
import { Col, Row } from 'react-bootstrap';
import user1 from '../../img/user-1.jpg';
import user2 from '../../img/user-2.jpg';
import user3 from '../../img/user-3.jpg';
import user4 from '../../img/user-4.jpg';
import './Testimonial.css'

const Testimonials = () => {
    return (

        <Row className='user-container'>
            <h1>Reviews</h1>
            <Col md={6}>

                <div className='user-card'>
                    <div className='d-flex justify-content-start align-items-center'>
                        <img className='user' src={user1} alt="" />
                        <h3>Prachi Desai </h3>
                    </div>

                    <p className='text-start'> “I want to thank the Placement team at uPerform. Not only did they prepare me for interviews but they also guided me towards all career opportunities and helped me choose what’s best for me. </p>
                </div>
            </Col>
            <Col md={6}>
                <div className='user-card'>
                    <div className='d-flex justify-content-start align-items-center'>
                        <img className='user' src={user3} alt="" />
                        <h3>Deuben Alvares </h3>
                    </div>

                    <p className='text-start'> ““The culture and energy at uPerform is brilliant! Apart from the academics, the random dancing, painting furniture, surprise pizza parties, digital detox days make it a wholesome experience. 10/10 for sure”. </p>
                </div>
            </Col>
            <Col md={6}>
                <div className='user-card'>
                    <div className='d-flex justify-content-start align-items-center'>
                        <img className='user' src={user4} alt="" />
                        <h3>Sadhvi Arora </h3>
                    </div>

                    <p className='text-start'> “I have always been averse of technical topics, but trainers at uPerform make even the toughest topic an easy learning experience! Never have I had so much fun while learning”. </p>
                </div>
            </Col>
            <Col md={6}>
                <div className='user-card '>
                    <div className='d-flex justify-content-start align-items-center'>
                        <img className='user' src={user2} alt="" />
                        <h3>Deuben Alvares </h3>
                    </div>

                    <p className='text-start'>“All trainers including Meherzad, Daksh, Aneri, Karan, Aditya and all the visiting faculty are just amazing. They went beyond their training hours to guide me in this field. Today I have a full scholarship for my MBA abroad due to the knowledge I gained at uPerform.” </p>
                </div>
            </Col >
        </Row >
    );
};

export default Testimonials;