import React, { Component } from 'react';
import './App.css';
import img_elHomeBG from './images/UploadProfilePicScreen_elHomeBG_760127.jpg';
import img_elHomePageBubble from './images/FirstPageScreen_elHomePageBubble_742616.png';
import img_elUpProfilePic from './images/UploadProfilePicScreen_elUpProfilePic_412082.png';
import btn_icon_522411 from './images/btn_icon_522411.png';

// UI framework component imports
import Container from 'muicss/lib/react/container';


export default class FirstPageScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elConfirm = (ev) => {
    // Go to screen 'newpost'
    this.props.appActions.goToScreen('newpost', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elNext = (ev) => {
    // Go to screen 'UploadProfilePic'
    this.props.appActions.goToScreen('uploadprofilepic', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButtonCopy3 = (ev) => {
    // Go to screen 'profile1'
    this.props.appActions.goToScreen('profile1', { transitionId: 'fadeIn' });
  
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
        backgroundColor: 'white',
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
        display: 'none',
        pointerEvents: 'none',
     };
    const style_confirm = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_522411+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '7.902%',
        paddingTop: '30%',
        backgroundPosition: '50% 0%',
        color: '#feffff',
        textAlign: 'center',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_confirm_outer = {
        display: 'none',
        cursor: 'pointer',
     };
    const style_next = {
        display: 'block',
        fontSize: 32.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#403d43',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_next_outer = {
        cursor: 'pointer',
     };
    const style_card = {
        width: '100%',
        height: '100%',
     };
    const style_card_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 5.3px 37px rgba(0, 0, 0, 0.4500)',
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
        cursor: 'pointer',
     };
    const style_buttonCopy2 = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
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
        pointerEvents: 'none',
     };
    const style_textCopy = {
        fontSize: 18.4,
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    const style_text = {
        fontSize: 28.5,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen FirstPageScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elHomeBG' style={style_homeBG_outer}>
            <img style={style_homeBG} src={img_elHomeBG} alt=""  />
          
          </div>
          
          <div className='elHomePageBubble' style={style_homePageBubble_outer}>
            <div style={style_homePageBubble} />
          
          </div>
          
          <div className='elUpProfilePic' style={style_upProfilePic_outer}>
            <img style={style_upProfilePic} src={img_elUpProfilePic} alt=""  />
          
          </div>
          
          <div className='actionFont elConfirm' style={style_confirm_outer}>
            <button style={style_confirm}  onClick={this.onClick_elConfirm} >
              {this.props.locStrings.homepage_button2_522411}
            </button>
          
          </div>
          
          <div className="flowRow flowRow_FirstPageScreen_elNext_881763">
          <div className='elNext' style={style_next_outer}>
            <button style={style_next}  onClick={this.onClick_elNext} >
              {this.props.locStrings.homepage_button2_881763}
            </button>
          
          </div>
          
          </div>
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='cardBg elCard' style={style_card_outer}>
              <div style={style_card} />
            
            </div>
            
            <button className='elButtonCopy3' style={style_buttonCopy3}  onClick={this.onClick_elButtonCopy3} >
              {this.props.locStrings.homepage2scoll2_buttoncopy3_444419}
            </button>
            <button className='elButtonCopy2' style={style_buttonCopy2}  >
              {this.props.locStrings.homepage2scoll2_buttoncopy2_25110}
            </button>
            <button className='elButton' style={style_button}  >
              {this.props.locStrings.homepage2scoll2_button_705747}
            </button>
            <div className='font-arialRoundedMTBold  elTextCopy' style={style_textCopy}>
              <div>{this.props.locStrings.homepage2scoll2_textcopy_400331}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText' style={style_text}>
              <div>{this.props.locStrings.homepage2scoll2_text_739752}</div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  

}
