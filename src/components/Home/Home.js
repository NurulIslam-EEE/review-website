import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import About from '../About/About';
import Course from '../Course/Course';
import HeroSection from '../HeroSection/HeroSection';



const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <Container fluid>
                <h1>Featured Courses</h1>
                <Row>

                    {
                        courses.slice(4).map(course => <Course course={course}></Course>)
                    }

                </Row>
            </Container>



        </div>
    );
};

export default Home;