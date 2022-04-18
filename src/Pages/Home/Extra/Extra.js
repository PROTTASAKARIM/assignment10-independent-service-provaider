import React from 'react';
import mypic from "../../../images/MyPicture.jpg"

const Extra = () => {
    return (
        <div className='container m-5'>
            <h1 className='m-5'>Hi I am the owner of the page</h1>
            <div className='d-flex nm-2'>
                <img src={mypic} alt="" />
                <div className='container m-2'>
                    <h3>Contact Me</h3>
                    <p>Hi I am Prottasa Karim. Please contact me If you want any thing to inform. I am the owner of Dreamy Photography. </p>
                    <p>My mail address is prottasakarim99@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Extra;