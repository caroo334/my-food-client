import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (<div className='homeContainer'>
        {/* <h1 className='homeTitle'>WELCOME</h1> */}
        <Link to="/randomRecipes"><button className='homeButton'>Press and enjoy</button></Link>
    </div>)
}