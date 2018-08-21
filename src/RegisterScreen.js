import React, { Component } from 'react';
import './App.css';
import img_elBGPic from './images/LoginAndRegisterScreen_elBGpic_526882.jpg';
import img_elBubble from './images/LoginAndRegisterScreen_elBubble_210045.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';


export default class RegisterScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field_EnterName: '',
      field_EnterPassword: '',
      field_EnterPasswordAgain: '',
    };
  }

  textInputChanged_field_EnterName = (event) => {
    this.setState({field_EnterName: event.target.value});
  }
  
  onClick_elButton_Confirm = (ev) => {
    // Go to screen 'LoginAndRegister'
    this.props.appActions.goToScreen('loginandregister', { transitionId: 'fadeIn' });
  
  }
  
  
  textInputChanged_field_EnterPassword = (event) => {
    this.setState({field_EnterPassword: event.target.value});
  }
  
  textInputChanged_field_EnterPasswordAgain = (event) => {
    this.setState({field_EnterPasswordAgain: event.target.value});
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
    const style_BGPic = {
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
    const style_text_Username = {
        fontSize: 26.8,
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
    const style_text_Yolo = {
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
    const style_text_Title = {
        fontSize: 33.5,
        color: '#feffff',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 5.3px 14.1px',
        pointerEvents: 'none',
     };
    const style_field_EnterName = {
        display: 'block',
        color: '#feffff',
        fontSize: 26.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    const style_button_Confirm = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(46, 154, 199, 0.7846)',
        cursor: 'pointer',
     };
    const style_text_Password = {
        fontSize: 26.8,
        color: '#feffff',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 5.3px 14.1px',
        pointerEvents: 'none',
     };
    const style_field_EnterPassword = {
        display: 'block',
        color: '#feffff',
        fontSize: 26.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    const style_text_ComfirmPassword = {
        fontSize: 26.8,
        color: '#feffff',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 5.3px 14.1px',
        pointerEvents: 'none',
     };
    const style_field_EnterPasswordAgain = {
        display: 'block',
        color: '#feffff',
        fontSize: 26.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    
    return (
      <Container fluid={true} className="AppScreen RegisterScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <img className='elBGPic' style={style_BGPic} src={img_elBGPic} alt=""  />
          <div className='elBubble' style={style_bubble} />
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='font-SFUITextBold  elText_Username' style={style_text_Username}>
              <div>{this.props.locStrings.n3_textcopy2_845065}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText_Slogan' style={style_text_Slogan}>
              <div>{this.props.locStrings.n3_textcopy_85975}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText_Yolo' style={style_text_Yolo}>
              <div>{this.props.locStrings.n3_text_259258}</div>
            </div>
            <button className='elButton_LoginAndRegister' style={style_button_LoginAndRegister}  >
              {this.props.locStrings.n3_buttoncopy_544052}
            </button>
            <button className='elButton_HomePage' style={style_button_HomePage}  >
              {this.props.locStrings.n3_button_94838}
            </button>
            <button className='elButton_BubbleDiary' style={style_button_BubbleDiary}  >
              {this.props.locStrings.n3_buttoncopy2_530432}
            </button>
            <button className='elButton_Profile' style={style_button_Profile}  >
              {this.props.locStrings.n3_buttoncopy3_25254}
            </button>
            <div className='font-SFUITextBold  elText_Title' style={style_text_Title}>
              <div>{this.props.locStrings.n3_text2_715879}</div>
            </div>
            <Input className='elField_EnterName' style={style_field_EnterName} type="text" hint={this.props.locStrings.n3_fieldcopy_55690} onChange={this.textInputChanged_field_EnterName} defaultValue={this.state.field_EnterName}  />
            <Button className='elButton_Confirm' style={style_button_Confirm}  onClick={this.onClick_elButton_Confirm} >
              {this.props.locStrings.n3_button2_537648}
            </Button>
            <div className='font-SFUITextBold  elText_Password' style={style_text_Password}>
              <div>{this.props.locStrings.n_textcopy2_575578}</div>
            </div>
            <Input className='elField_EnterPassword' style={style_field_EnterPassword} type="password" hint={this.props.locStrings.n_fieldcopy_807666} onChange={this.textInputChanged_field_EnterPassword} defaultValue={this.state.field_EnterPassword}  />
            <div className='font-SFUITextBold  elText_ComfirmPassword' style={style_text_ComfirmPassword}>
              <div>{this.props.locStrings.n_textcopy3_196979}</div>
            </div>
            <Input className='elField_EnterPasswordAgain' style={style_field_EnterPasswordAgain} type="password" hint={this.props.locStrings.n_fieldcopy2_256033} onChange={this.textInputChanged_field_EnterPasswordAgain} defaultValue={this.state.field_EnterPasswordAgain}  />
          </div>
        </div>
      </Container>
    )
  }
  

}
