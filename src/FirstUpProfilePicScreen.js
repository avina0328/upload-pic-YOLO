import React, { Component } from 'react';
import './App.css';
import img_elHomeBG from './images/EmailSentScreen_elBGpic_419395.jpg';
import img_elUpProfilePic from './images/UploadProfilePicScreen_elUpProfilePic_412082.png';

// UI framework component imports
import Container from 'muicss/lib/react/container';


export default class FirstUpProfilePicScreen extends Component {

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
    const style_text_Yolo = {
        fontSize: 28.5,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text_Yolo_outer = {
        pointerEvents: 'none',
     };
    const style_text_Slogan = {
        fontSize: 18.4,
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'left',
     };
    const style_text_Slogan_outer = {
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
     };
    const style_button_HomePage_outer = {
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
     };
    const style_button_LoginAndRegister_outer = {
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
     };
    const style_button_BubbleDiary_outer = {
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
     };
    const style_button_Profile_outer = {
        pointerEvents: 'none',
     };
    const style_homeBG = {
        height: 'auto',
     };
    const style_homeBG_outer = {
        pointerEvents: 'none',
     };
    const style_upProfilePic = {
        height: 'auto',
     };
    const style_upProfilePic_outer = {
        pointerEvents: 'none',
     };
    const style_button_UploadPic = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_UploadPic_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen FirstUpProfilePicScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='font-arialRoundedMTBold  elText_Yolo' style={style_text_Yolo_outer}>
            <div style={style_text_Yolo}>
              <div>{this.props.locStrings.start6_text_861609}</div>
            </div>
          
          </div>
          
          <div className='font-arialRoundedMTBold  elText_Slogan' style={style_text_Slogan_outer}>
            <div style={style_text_Slogan}>
              <div>{this.props.locStrings.start6_textcopy_763277}</div>
            </div>
          
          </div>
          
          <div className='elButton_HomePage' style={style_button_HomePage_outer}>
            <button style={style_button_HomePage}  >
              {this.props.locStrings.start6_button_650195}
            </button>
          
          </div>
          
          <div className='elButton_LoginAndRegister' style={style_button_LoginAndRegister_outer}>
            <button style={style_button_LoginAndRegister}  >
              {this.props.locStrings.start6_buttoncopy_592182}
            </button>
          
          </div>
          
          <div className='elButton_BubbleDiary' style={style_button_BubbleDiary_outer}>
            <button style={style_button_BubbleDiary}  >
              {this.props.locStrings.start6_buttoncopy2_496788}
            </button>
          
          </div>
          
          <div className='elButton_Profile' style={style_button_Profile_outer}>
            <button style={style_button_Profile}  >
              {this.props.locStrings.start6_buttoncopy3_739994}
            </button>
          
          </div>
          
          <div className='elHomeBG' style={style_homeBG_outer}>
            <img style={style_homeBG} src={img_elHomeBG} alt=""  />
          
          </div>
          
          <div className='elUpProfilePic' style={style_upProfilePic_outer}>
            <img style={style_upProfilePic} src={img_elUpProfilePic} alt=""  />
          
          </div>
          
          <div className='actionFont elButton_UploadPic' style={style_button_UploadPic_outer}>
            <div style={style_button_UploadPic}   />
          
          </div>
          
        </div>
      </Container>
    )
  }
  

}
