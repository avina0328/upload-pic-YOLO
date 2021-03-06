import React, { Component } from 'react';
import './App.css';
import img_elBGpic from './images/LoginAndRegisterScreen_elBGpic_526882.jpg';
import img_elBubble from './images/LoginAndRegisterScreen_elBubble_210045.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';


export default class LoginAndRegisterScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field_PlzEnterAccount: '',
      field_PlzEnterPassword: '',
    };
  }

  textInputChanged_field_PlzEnterAccount = (event) => {
    this.setState({field_PlzEnterAccount: event.target.value});
  }
  
  textInputChanged_field_PlzEnterPassword = (event) => {
    this.setState({field_PlzEnterPassword: event.target.value});
  }
  
  onClick_elButton_Login = (ev) => {
  
  }
  
  
  onClick_elButton_ForgetPassword = (ev) => {
    // Go to screen 'ForgetPassword'
    this.props.appActions.goToScreen('forgetpassword', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton_CreateNewAccount = (ev) => {
    // Go to screen 'VertifyEmail'
    this.props.appActions.goToScreen('vertifyemail', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: '#fcffff',
        pointerEvents: 'none',
     };
    const style_BGpic = {
        height: 'auto',
        pointerEvents: 'none',
     };
    const style_bubble = {
        backgroundImage: 'url('+img_elBubble+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_text_Password = {
        fontSize: 31.8,
        color: '#feffff',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 5.3px 14.1px',
        pointerEvents: 'none',
     };
    const style_text_Slogan = {
        fontSize: 18.4,
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    const style_text_YoloDiary = {
        fontSize: 28.5,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    const style_button_LoginAndRegister = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        pointerEvents: 'none',
     };
    const style_button_HomePage = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        pointerEvents: 'none',
     };
    const style_button_BubbleDiary = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        pointerEvents: 'none',
     };
    const style_button_Profile = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        pointerEvents: 'none',
     };
    const style_text_Account = {
        fontSize: 31.8,
        color: '#feffff',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 5.3px 14.1px',
        pointerEvents: 'none',
     };
    const style_field_PlzEnterAccount = {
        display: 'block',
        color: '#feffff',
        fontSize: 31.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    const style_field_PlzEnterPassword = {
        display: 'block',
        color: '#feffff',
        fontSize: 31.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    const style_button_Login = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(46, 154, 199, 0.7846)',
        cursor: 'pointer',
     };
    const style_button_ForgetPassword = {
        display: 'block',
        fontSize: 29.5,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: '#feffff',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        cursor: 'pointer',
     };
    const style_button_CreateNewAccount = {
        display: 'block',
        fontSize: 29.5,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: '#feffff',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        cursor: 'pointer',
     };
    
    return (
      <Container fluid={true} className="AppScreen LoginAndRegisterScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <img className='elBGpic' style={style_BGpic} src={img_elBGpic} alt=""  />
          <div className='elBubble' style={style_bubble} />
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='font-SFUITextBold  elText_Password' style={style_text_Password}>
              <div>{this.props.locStrings.start_text2_494131}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText_Slogan' style={style_text_Slogan}>
              <div>{this.props.locStrings.start_text_940524}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText_YoloDiary' style={style_text_YoloDiary}>
              <div>{this.props.locStrings.start_text_916527}</div>
            </div>
            <button className='elButton_LoginAndRegister' style={style_button_LoginAndRegister}  >
              {this.props.locStrings.start_button_893038}
            </button>
            <button className='elButton_HomePage' style={style_button_HomePage}  >
              {this.props.locStrings.start_button_819587}
            </button>
            <button className='elButton_BubbleDiary' style={style_button_BubbleDiary}  >
              {this.props.locStrings.start_buttoncopy_504875}
            </button>
            <button className='elButton_Profile' style={style_button_Profile}  >
              {this.props.locStrings.start_buttoncopy2_1031559}
            </button>
            <div className='font-SFUITextBold  elText_Account' style={style_text_Account}>
              <div>{this.props.locStrings.start_text2_739535}</div>
            </div>
            <Input className='elField_PlzEnterAccount' style={style_field_PlzEnterAccount} type="text" hint={this.props.locStrings.start_field_176836} onChange={this.textInputChanged_field_PlzEnterAccount} defaultValue={this.state.field_PlzEnterAccount}  />
            <Input className='elField_PlzEnterPassword' style={style_field_PlzEnterPassword} type="password" hint={this.props.locStrings.start_field_107563} onChange={this.textInputChanged_field_PlzEnterPassword} defaultValue={this.state.field_PlzEnterPassword}  />
            <Button className='elButton_Login' style={style_button_Login}  onClick={this.onClick_elButton_Login} >
              {this.props.locStrings.start_button2_219442}
            </Button>
            <button className='elButton_ForgetPassword' style={style_button_ForgetPassword}  onClick={this.onClick_elButton_ForgetPassword} >
              {this.props.locStrings.start_button3_399600}
            </button>
            <button className='elButton_CreateNewAccount' style={style_button_CreateNewAccount}  onClick={this.onClick_elButton_CreateNewAccount} >
              {this.props.locStrings.start_button3_135776}
            </button>
          </div>
        </div>
      </Container>
    )
  }
  

}
