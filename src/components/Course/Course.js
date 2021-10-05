import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    const { courseTitle, price, picture, description } = props.course;
    return (
        <Col md={4}>
            <Card className='card' style={{ width: '24rem', height: '35rem', margin: '6px 0px 15px 10px' }}>
                <Card.Img className='card-img' variant="top" src={picture} />
                <Card.Body>
                    <Card.Title className='text-start'>{courseTitle}</Card.Title>
                    <Card.Text className='text-start'>
                        <p>{description} </p>
                        <p>{price}</p>
                    </Card.Text>
                </Card.Body>
                <Button className='m-3 card-btn'>More Information Here</Button>
            </Card>
        </Col>
    );
};

export default Course;