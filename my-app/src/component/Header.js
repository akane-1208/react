import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Home_backgrond from '../img/cafe_white.jpg';
// import Contact from './Contact';
// import Profile from './Profile';
// import Skill from './Skill';
// import Work from './Work';

console.log(Home_backgrond);

class Header extends React.Component {
    render() {
        return(
            <div className='home-layout'>
                <div className='home-title'>
                    <h1 className='title'>Akane's Portfolio</h1>
                    {/* <img src={Home_backgrond} alt='背景' /> */}
                </div>
                <div className='home-list'>
                    <ul>
                        <li><Link to='/Home'>Home</Link></li>
                        <li><Link to='/Profile'>Profile</Link></li>
                        <li><Link to='/Skill'>Skill</Link></li>
                        <li><Link to='/Work'>Work</Link></li>
                        <li><Link to='/Contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;