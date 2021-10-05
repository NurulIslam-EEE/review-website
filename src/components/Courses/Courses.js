import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses] = useCourses();

    return (

        <Container fluid className='courses'>
            <h1>Featured Courses</h1>
            <Row>

                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }


            </Row>

        </Container>


    );
};

export default Courses;