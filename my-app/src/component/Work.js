import React from 'react';
import Card from './Card';
import './Work.css';
import WorkIcon from '../img/work-icon.png';
import WorkIcon2 from '../img/work-icon2.png';

class Work extends React.Component {
    render() {
        return(
            <div className='wrapper'>
                    <h1 className='work-title'>Work</h1>
                        <div className='work-card'>
                            <Card img={ WorkIcon }  title='Portfolio Site' lead='HTML CSS JavaScriptを使用した初めて作ったサイト' link='https://github.com/akane-1208/Co_subject' />
                            <Card img={ WorkIcon2 }  title='Portfolio Site' lead='HTML CSS JavaScriptで作成したサイトをReactを使用し、再度作成したもの' link='https://github.com/akane-1208/react_subjects' />
                        </div>
                    <h3 className='work-explanation'>※画像をクリックするとGithubのソースコードに飛ぶことができます。</h3>
                </div>
        )
    };
}

export default Work;