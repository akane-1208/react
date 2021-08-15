import React from 'react';
import './Skill.css';

class Skill extends React.Component {
    render() {
        return(
            <div>
                <div class="inner">
                    <h1 className='Skill-title'>Skill</h1>
                    <div class="Skill-contents">
                        <div class="Skill-card">
                            <div class="Skill-desk">
                                <h3 class="Skill-table-title">PC基本スキル</h3>
                                <table class="Skill-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">技術</th>
                                            <th scope="col">年数</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">EXCEL</th>
                                            <td>4年</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">WORD</th>
                                            <td>12年</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">PowerPoint</th>
                                            <td>3年</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="Skill-card">
                            <div class="Skill-desk">
                                <h3 class="Skill-table-title">デザイン・コーティングスキル</h3>
                                <table class="Skill-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">技術</th>
                                            <th scope="col">年数</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">HTML</th>
                                            <td>4ヶ月</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">CSS</th>
                                            <td>4ヶ月</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="Skill-card">
                            <div class="Skill-desk">
                                <h3 class="Skill-table-title">フロントエンドスキル</h3>
                                <table class="Skill-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">技術</th>
                                            <th scope="col">年数</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">JavaScript</th>
                                            <td>3ヶ月</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">React</th>
                                            <td>2ヶ月</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="Skill-card">
                            <div class="Skill-desk">
                                <h3 class="Skill-table-title">DBスキル</h3>
                                <table class="Skill-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">技術</th>
                                            <th scope="col">年数</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">MySQL</th>
                                            <td>4ヶ月</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="Skill-card">
                            <div class="Skill-desk">
                                <h3 class="Skill-table-title">その他スキル</h3>
                                <table class="Skill-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">技術</th>
                                            <th scope="col">年数</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">slack</th>
                                            <td>4ヶ月</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">git</th>
                                            <td>3ヶ月</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        )
    }
}

export default Skill;