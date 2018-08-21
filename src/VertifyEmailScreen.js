import React, { Component } from 'react';
import './App.css';
import img_elBGpic from './images/EmailSentScreen_elBGpic_419395.jpg';
import img_elBubble from './images/LoginAndRegisterScreen_elBubble_210045.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';


export default class VertifyEmailScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field_EnterEmail: '',
    };
  }

  textInputChanged_field_EnterEmail = (event) => {
    this.setState({field_EnterEmail: event.target.value});
  }
  
  onClick_elButton_Comfirm = (ev) => {
    // Go to screen 'EmailSent'
    this.props.appActions.goToScreen('emailsent', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton_GotAccountAlready = (ev) => {
    // Go to screen 'LoginAndRegister'
    this.props.appActions.goToScreen('loginandregister', { transitionId: 'fadeIn' });
  
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
    const style_text_Email = {
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
    const style_text_Title = {
        fontSize: 33.5,
        color: '#feffff',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 5.3px 14.1px',
        pointerEvents: 'none',
     };
    const style_field_EnterEmail = {
        display: 'block',
        color: '#feffff',
        fontSize: 28.5,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    const style_button_Comfirm = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(46, 154, 199, 0.7846)',
        cursor: 'pointer',
     };
    const style_button_GotAccountAlready = {
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
      <Container fluid={true} className="AppScreen VertifyEmailScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <img className='elBGpic' style={style_BGpic} src={img_elBGpic} alt=""  />
          <div className='elBubble' style={style_bubble} />
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='font-SFUITextBold  elText_Email' style={style_text_Email}>
              <div>{this.props.locStrings.n3_textcopy2_679604}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText_Slogan' style={style_text_Slogan}>
              <div>{this.props.locStrings.n3_textcopy_94010}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText_YoloDiary' style={style_text_YoloDiary}>
              <div>{this.props.locStrings.n3_text_511687}</div>
            </div>
            <button className='elButton_LoginAndRegister' style={style_button_LoginAndRegister}  >
              {this.props.locStrings.n3_buttoncopy_892982}
            </button>
            <button className='elButton_HomePage' style={style_button_HomePage}  >
              {this.props.locStrings.n3_button_200939}
            </button>
            <button className='elButton_BubbleDiary' style={style_button_BubbleDiary}  >
              {this.props.locStrings.n3_buttoncopy2_822075}
            </button>
            <button className='elButton_Profile' style={style_button_Profile}  >
              {this.props.locStrings.n3_buttoncopy3_1008041}
            </button>
            <div className='font-SFUITextBold  elText_Title' style={style_text_Title}>
              <div>{this.props.locStrings.n3_text2_513155}</div>
            </div>
            <Input className='elField_EnterEmail' style={style_field_EnterEmail} type="email" hint={this.props.locStrings.n3_fieldcopy_675682} onChange={this.textInputChanged_field_EnterEmail} defaultValue={this.state.field_EnterEmail}  />
            <Button className='elButton_Comfirm' style={style_button_Comfirm}  onClick={this.onClick_elButton_Comfirm} >
              {this.props.locStrings.n3_button2_115023}
            </Button>
            <button className='elButton_GotAccountAlready' style={style_button_GotAccountAlready}  onClick={this.onClick_elButton_GotAccountAlready} >
              {this.props.locStrings.n3_button3_208497}
            </button>
          </div>
        </div>
      </Container>
    )
  }
  

}
