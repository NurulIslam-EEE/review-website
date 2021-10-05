
import { faClock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#0b2b4f', color: 'white' }} className='p-3 d-md-flex justify-content-around'>
            <div className='text-start'>
                <h3>Links</h3>
                <p>All Courses</p>
                <p>Security Courses</p>
                <p>Medical Courses</p>
                <p>Microsoft Office Courses</p>
            </div>
            <div className='text-start'>
                <h3>Administration Hours</h3>
                <p> <FontAwesomeIcon className='ms-3' icon={faClock} /> Monday - Friday: 8:30am to 6:00pm</p>
                <p><FontAwesomeIcon className='ms-3' icon={faClock} /> Saturday & Sunday: No Administration hours</p>
                <p><FontAwesomeIcon className='ms-3' icon={faPhone} /> (800) 490 - 7341</p>
                <p><FontAwesomeIcon className='ms-3' icon={faEnvelope} /> info@tiaedu.com</p>
            </div>
            <div className='text-start'>
                <h3>NYC Location</h3>
                <p>545 8th Avenue</p>
                <p>4th Floor</p>
                <p>New York, NY 10018</p>
                <p>On 8th Avenue, between 38th and 37th Street</p>
            </div>
            <div className='text-start'>
                <h3>DC/VA Metro Location</h3>
                <p>1901 N. Fort Myer Drive <br /> Suite 1020 <br /> Arlington, VA 22209 <br /> Near Rosslyn Metro Station <br /> Continuing Education Courses only for <br /> businesses, government contractors, and <br /> government employees.</p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    );
};

export default Footer;