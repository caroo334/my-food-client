import {React, useState} from 'react';
import '../styles/NavBar.css';

export default function NavBar(){
    return (
        <div className='navBarContainer'>
        <input className='navBarInput' placeholder='Look for your recipes'/>
        <button className='navBarButton'>Search</button>
        </div>
    )
}