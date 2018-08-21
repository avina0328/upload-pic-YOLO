import React, { Component } from 'react';
import './App.css';
import img_elBGpic from './images/EmailSentScreen_elBGpic_419395.jpg';
import img_elBubble from './images/LoginAndRegisterScreen_elBubble_210045.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';


export default class EmailSentScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButton_GoToLinkInEmail = (ev) => {
    // Go to screen 'Register'
    this.props.appActions.goToScreen('register', { transitionId: 'fadeIn' });
  
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
    const style_text2 = {
        fontSize: 33.5,
        color: '#feffff',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 5.3px 14.1px',
        pointerEvents: 'none',
     };
    const style_textCopy2 = {
        fontSize: 33.5,
        color: '#feffff',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 5.3px 14.1px',
        pointerEvents: 'none',
     };
    const style_button_GoToLinkInEmail = {
        display: 'block',
        fontSize: 24.5,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(46, 154, 199, 0.7846)',
        cursor: 'pointer',
     };
    
    return (
      <Container fluid={true} className="AppScreen EmailSentScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <img className='elBGpic' style={style_BGpic} src={img_elBGpic} alt=""  />
          <div className='elBubble' style={style_bubble} />
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='font-arialRoundedMTBold  elText_Slogan' style={style_text_Slogan}>
              <div>{this.props.locStrings.n2_textcopy_32667}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText_YoloDiary' style={style_text_YoloDiary}>
              <div>{this.props.locStrings.n2_text_26020}</div>
            </div>
            <button className='elButton_LoginAndRegister' style={style_button_LoginAndRegister}  >
              {this.props.locStrings.n2_buttoncopy_536405}
            </button>
            <button className='elButton_HomePage' style={style_button_HomePage}  >
              {this.props.locStrings.n2_button_486368}
            </button>
            <button className='elButton_BubbleDiary' style={style_button_BubbleDiary}  >
              {this.props.locStrings.n2_buttoncopy2_955738}
            </button>
            <button className='elButton_Profile' style={style_button_Profile}  >
              {this.props.locStrings.n2_buttoncopy3_270092}
            </button>
            <div className='font-SFUITextBold  elText2' style={style_text2}>
              <div>{this.props.locStrings.n2_text2_633940}</div>
            </div>
            <div className='font-SFUITextBold  elTextCopy2' style={style_textCopy2}>
              <div>{this.props.locStrings.n2_textcopy2_789877}</div>
            </div>
            <Button className='elButton_GoToLinkInEmail' style={style_button_GoToLinkInEmail}  onClick={this.onClick_elButton_GoToLinkInEmail} >
              {this.props.locStrings.n2_button2_728852}
            </Button>
          </div>
        </div>
      </Container>
    )
  }
  

}
