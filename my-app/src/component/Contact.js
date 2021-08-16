import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
    };
  }

  handleSubmit(){
    this.setState({isSubmitted:true})
  }

  render() {
    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          送信完了
          <div className='msg-btn'>
            <button　className='message-btn'><Link to='/Home'>Homeに戻る</Link></button>
          </div>
        </div>
      );
    } else {
      contactForm = (
        <form  onSubmit={()=>{this.handleSubmit()}} >
        <table class="contact-list">
            <tr>
                <th><label for="yourname">お名前</label></th>
                <td><input id="yourname" type="text" name="your-name" size="38" maxlength="40" placeholder="例：山田　太郎" value="" /></td>
            </tr>
            <tr>
                <th><label for="youremail">E-mail</label></th>
                <td><input id="youremail" type="email" name="your-email" size="40" maxlength="40" placeholder="例：sample@sample.com" value="" /></td>
            </tr>
            <tr>
                <th><label for="yourtell">お電話番号</label></th>
                <td><input id="yourtell" type="text" name="your-tell" size="40" maxlength="40" placeholder="例：000-0000-0000" value="" /></td>
            </tr>
            <tr>
                <th><label for="yourmessage">お問い合わせ内容</label></th>
                <td><textarea id="yourmessage" name="your-message" rows="8" cols="50" placeholder="例：ここにお問い合わせ内容を入力してください"></textarea></td>
            </tr>
        </table>
        <p>※メールが未達とならないようにドメイン制限受信をしている方は
            <br />「@sample.co.jp」からのメールを受信できるように設定をご変更ください。</p>
        <div class="sub_button">
            <input class="submit_btn" type="submit" name="submit" value="送信" />
        </div>
        {/* <div id="dialog">
            <p>ボタンをクリックしてください</p>
            <button id="yes">はい</button>
            <button id="no">いいえ</button>
            <button id="cancel">キャンセル</button>
        </div> */}
        </form>
      );
    }

    return (
      <div className='contact-form'>
        <h1 className='contact-title'>Contact</h1>
        {contactForm}
      </div>
    );
  }
}

export default ContactForm;