import React, { Component } from 'react';
import './App.css';
import img_elHomeBG from './images/EmailSentScreen_elBGpic_419395.jpg';
import img_elHomePageBubble from './images/FirstPageScreen_elHomePageBubble_742616.png';
import img_elUpProfilePic from './images/UploadProfilePicScreen_elUpProfilePic_412082.png';

// UI framework component imports
import Container from 'muicss/lib/react/container';


export default class HomePage2ScollScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

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
        backgroundColor: 'white',
        pointerEvents: 'none',
     };
    const style_text = {
        fontSize: 28.5,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_textCopy = {
        fontSize: 18.4,
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'left',
     };
    const style_textCopy_outer = {
        pointerEvents: 'none',
     };
    const style_button = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_outer = {
        pointerEvents: 'none',
     };
    const style_buttonCopy = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_buttonCopy_outer = {
        pointerEvents: 'none',
     };
    const style_buttonCopy2 = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_buttonCopy2_outer = {
        pointerEvents: 'none',
     };
    const style_buttonCopy3 = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_buttonCopy3_outer = {
        pointerEvents: 'none',
     };
    const style_homeBG = {
        height: 'auto',
     };
    const style_homeBG_outer = {
        pointerEvents: 'none',
     };
    const style_homePageBubble = {
        backgroundImage: 'url('+img_elHomePageBubble+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_homePageBubble_outer = {
        pointerEvents: 'none',
     };
    const style_upProfilePic = {
        height: 'auto',
     };
    const style_upProfilePic_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen HomePage2ScollScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='font-arialRoundedMTBold  elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.props.locStrings.homepage2_text_309726}</div>
            </div>
          
          </div>
          
          <div className='font-arialRoundedMTBold  elTextCopy' style={style_textCopy_outer}>
            <div style={style_textCopy}>
              <div>{this.props.locStrings.homepage2_textcopy_912351}</div>
            </div>
          
          </div>
          
          <div className='elButton' style={style_button_outer}>
            <button style={style_button}  >
              {this.props.locStrings.homepage2_button_527819}
            </button>
          
          </div>
          
          <div className='elButtonCopy' style={style_buttonCopy_outer}>
            <button style={style_buttonCopy}  >
              {this.props.locStrings.homepage2_buttoncopy_962501}
            </button>
          
          </div>
          
          <div className='elButtonCopy2' style={style_buttonCopy2_outer}>
            <button style={style_buttonCopy2}  >
              {this.props.locStrings.homepage2_buttoncopy2_570948}
            </button>
          
          </div>
          
          <div className='elButtonCopy3' style={style_buttonCopy3_outer}>
            <button style={style_buttonCopy3}  >
              {this.props.locStrings.homepage2_buttoncopy3_364356}
            </button>
          
          </div>
          
          <div className='elHomeBG' style={style_homeBG_outer}>
            <img style={style_homeBG} src={img_elHomeBG} alt=""  />
          
          </div>
          
          <div className='elHomePageBubble' style={style_homePageBubble_outer}>
            <div style={style_homePageBubble} />
          
          </div>
          
          <div className='elUpProfilePic' style={style_upProfilePic_outer}>
            <img style={style_upProfilePic} src={img_elUpProfilePic} alt=""  />
          
          </div>
          
        </div>
      </Container>
    )
  }
  

}
