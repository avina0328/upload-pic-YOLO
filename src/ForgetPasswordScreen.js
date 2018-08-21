import React, { Component } from 'react';
import './App.css';
import img_elBGpic from './images/EmailSentScreen_elBGpic_419395.jpg';
import img_elBubble from './images/LoginAndRegisterScreen_elBubble_210045.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';


export default class ForgetPasswordScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field_PlzEnterEmail: '',
    };
  }

  textInputChanged_field_PlzEnterEmail = (event) => {
    this.setState({field_PlzEnterEmail: event.target.value});
  }
  
  onClick_elButton_Comfirm = (ev) => {
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
    const style_text2 = {
        fontSize: 33.5,
        color: '#feffff',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 5.3px 14.1px',
        pointerEvents: 'none',
     };
    const style_field_PlzEnterEmail = {
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
    const style_textCopy3 = {
        fontSize: 21.8,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 5.3px 14.1px',
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen ForgetPasswordScreen" style={baseStyle}>
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
              <div>{this.props.locStrings.n4_textcopy2_843605}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText_Slogan' style={style_text_Slogan}>
              <div>{this.props.locStrings.n4_textcopy_13062}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText_YoloDiary' style={style_text_YoloDiary}>
              <div>{this.props.locStrings.n4_text_325123}</div>
            </div>
            <button className='elButton_LoginAndRegister' style={style_button_LoginAndRegister}  >
              {this.props.locStrings.n4_buttoncopy_301649}
            </button>
            <button className='elButton_HomePage' style={style_button_HomePage}  >
              {this.props.locStrings.n4_button_925379}
            </button>
            <button className='elButton_BubbleDiary' style={style_button_BubbleDiary}  >
              {this.props.locStrings.n4_buttoncopy2_299161}
            </button>
            <button className='elButton_Profile' style={style_button_Profile}  >
              {this.props.locStrings.n4_buttoncopy3_793673}
            </button>
            <div className='font-SFUITextBold  elText2' style={style_text2}>
              <div>{this.props.locStrings.n4_text2_15837}</div>
            </div>
            <Input className='elField_PlzEnterEmail' style={style_field_PlzEnterEmail} type="email" hint={this.props.locStrings.n4_fieldcopy_239957} onChange={this.textInputChanged_field_PlzEnterEmail} defaultValue={this.state.field_PlzEnterEmail}  />
            <Button className='elButton_Comfirm' style={style_button_Comfirm}  onClick={this.onClick_elButton_Comfirm} >
              {this.props.locStrings.n4_button2_923584}
            </Button>
            <div className='font-SFUITextBold  elTextCopy3' style={style_textCopy3}>
              <div>{this.props.locStrings.n4_textcopy3_326443}</div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  

}
