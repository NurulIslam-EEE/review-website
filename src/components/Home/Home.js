import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';
import About from '../About/About';
import Course from '../Course/Course';
import HeroSection from '../HeroSection/HeroSection';
import Testimonials from '../Testimonials/Testimonials';
import './Home .css'


const Home = () => {
    const [courses] = useCourses();

    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <Container fluid className='home-courses'>
                <h1>Featured Courses</h1>
                <Row >

                    {
                        courses.slice(5).map(course => <Course key={course.id} course={course}>  </Course>)
                    }

                </Row>
                <NavLink to="/courses"><button className='btn-all-course'>See All Courses</button></NavLink>

            </Container>
            <Testimonials></Testimonials>



        </div>
    );
};

export default Home;