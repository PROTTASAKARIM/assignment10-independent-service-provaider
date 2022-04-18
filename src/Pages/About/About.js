import React from 'react';
import MyPicture from '../../images/MyPicture.jpg'

const About = () => {
    return (
        <div>
            <img src={MyPicture} alt="" />
            <div className='container m-2'>
                <h3>My Goals</h3>
                <p className='text-left'>I am an CSE graduate. My want is to fill up my lackings in my coding skiils and learn better and more organize way of programming. I have learn so many things from this course i want to continue that. My main ultimate goal is to do freelancing. But i think to learn and work better one should work under corporation. So After finishing this course i will try to get a job to upgrade my skills.</p>
            </div>
        </div>
    );
};

export default About;