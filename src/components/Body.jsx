import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/static/illustration-mockups.svg';
import logo from '../assets/static/logo.svg';

const MainApp = () => (
  <div className='container'>
    <Link to='/'>
      <img src={logo} alt='Logo' />
    </Link>
    <div className='flex'>
      <div>
        <img src={image} alt='illustration' />
      </div>

      <div>
        <h1>
          Build The Community
          <br />
          {' '}
          Your Fans Will Love
        </h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice,
          but so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button>Register</button>
      </div>
    </div>
  </div>
);

export default MainApp;
