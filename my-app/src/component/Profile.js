import React from 'react';
import './Profile.css';
import Icon from '../img/aikon.jpg.png';

class Profile extends React.Component {
    render() {
        return(
            <div>
                <h1 className='profile-title'>Profile</h1>
                    <div className='profile-contents'>
                        <div className='profile-icon'>
                        <img src={Icon} alt='アイコン' className='p-icon' />
                            <div className='profile-sentence'>
                                <h3>はじめまして、あかねと申します。<br />昨今、IT化している社会でそれを支えられる人間になりたいと思い、<br />エンジニアになりました。<br />まだまだ勉強中の身ですが、よろしくお願いいたします。</h3>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Profile;