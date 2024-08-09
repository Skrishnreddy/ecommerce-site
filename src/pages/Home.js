import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to Dayananda Sagar E-commerce Site</h1>
            <p className="description">Explore our range of products and enjoy a seamless shopping experience.</p>
            <Link to='/products' className="link-button">View Products</Link>
        </div>
    );
}

export default Home;
