import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (

        <Container fluid className='courses'>
            <h1>Featured Courses</h1>
            <Row>

                {
                    courses.map(course => <Course course={course}></Course>)
                }


            </Row>

        </Container>


    );
};

export default Courses;