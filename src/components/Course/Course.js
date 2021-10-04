import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Course = (props) => {
    const { courseTitle, price, picture, description } = props.course;
    return (
        <Col md={4}>
            <Card className='card' style={{ width: '24rem', height: '34rem', margin: '6px 0px 10px 10px' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title className='text-start'>{courseTitle}</Card.Title>
                    <Card.Text className='text-start'>
                        {description}
                    </Card.Text>
                    <Card.Text className='text-start'>
                        {price}
                    </Card.Text>
                </Card.Body>


                <Button>More Information Here</Button>
            </Card>
        </Col>
    );
};

export default Course;