import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return(
            <div>
                <h1 className='home'>Welcome!<br />Akane's Portfolio!</h1>
                <h3 className='home-explanation'>Thank you for coming.<br />Please take your time.</h3>
            </div>
        )
    }
}

export default Home;