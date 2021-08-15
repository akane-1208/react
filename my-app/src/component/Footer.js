import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'


class Footer extends React.Component {
    render() {
        return(
                <div className='home-list2'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/Profile'>Profile</Link></li>
                        <li><Link to='/Skill'>Skill</Link></li>
                        <li><Link to='/Work'>Work</Link></li>
                        <li><Link to='/Contact'>Contact</Link></li>
                    </ul>
                </div>
        )
    }
}

export default Footer;