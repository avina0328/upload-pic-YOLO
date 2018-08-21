import React, { Component } from 'react';
import './App.css';
import img_elGroup from './images/Profile1Screen_elGroup_75637.png';
import img_elN225 from './images/Profile1Screen_elN225_942914.png';
import btn_icon_908687 from './images/btn_icon_908687.png';

// UI framework component imports
import Container from 'muicss/lib/react/container';


export default class Profile1Screen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elResetpassword = (ev) => {
    // Go to screen 'resetpassword'
    this.props.appActions.goToScreen('resetpassword', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elLogout = (ev) => {
    // Go to screen 'logout'
    this.props.appActions.goToScreen('logout', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elFriendlist = (ev) => {
    // Go to screen 'friendlist'
    this.props.appActions.goToScreen('friendlist', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elChatroom = (ev) => {
    // Go to screen 'chatroom'
    this.props.appActions.goToScreen('chatroom', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButtonCopy3 = (ev) => {
    // Go to screen 'resetpassword'
    this.props.appActions.goToScreen('resetpassword', { transitionId: 'fadeIn' });
  
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
    const style_group = {
        backgroundImage: 'url('+img_elGroup+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_group_outer = {
        boxShadow: '0.0px 5.3px 37px rgba(0, 0, 0, 0.4500)',
        pointerEvents: 'none',
     };
    const style_n225 = {
        backgroundImage: 'url('+img_elN225+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_n225_outer = {
        pointerEvents: 'none',
     };
    const style_member_name = {
        fontSize: 25.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_member_name_outer = {
        pointerEvents: 'none',
     };
    const style_resetpassword = {
        display: 'block',
        fontSize: 18.4,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(46, 154, 199, 0.7846)',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_resetpassword_outer = {
        cursor: 'pointer',
     };
    const style_member_email = {
        fontSize: 20.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_member_email_outer = {
        pointerEvents: 'none',
     };
    const style_logout = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_908687+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '21.768%',
        backgroundPosition: '50% 0%',
        color: '(null)',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_logout_outer = {
        cursor: 'pointer',
     };
    const style_friendlist = {
        display: 'block',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_friendlist_outer = {
        cursor: 'pointer',
     };
    const style_chatroom = {
        display: 'block',
        color: '#feffff',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_chatroom_outer = {
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
      <Container fluid={true} className="AppScreen Profile1Screen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elGroup' style={style_group_outer}>
            <div style={style_group} />
          
          </div>
          
          <div className='elN225' style={style_n225_outer}>
            <div style={style_n225} />
          
          </div>
          
          <div className="flowRow flowRow_Profile1Screen_elMember_name_1048171">
          <div className='elMember_name' style={style_member_name_outer}>
            <div style={style_member_name}>
              <div>{this.props.locStrings.profile1_text2_1048171}</div>
            </div>
          
          </div>
          
          <div className='elResetpassword' style={style_resetpassword_outer}>
            <button style={style_resetpassword}  onClick={this.onClick_elResetpassword} >
              {this.props.locStrings.profile1_button2_1017397}
            </button>
          
          </div>
          
          <div className='elMember_email' style={style_member_email_outer}>
            <div style={style_member_email}>
              <div>{this.props.locStrings.profile1_text2_993378}</div>
            </div>
          
          </div>
          
          </div>
          <div className='actionFont elLogout' style={style_logout_outer}>
            <button style={style_logout}  onClick={this.onClick_elLogout}  />
          
          </div>
          
          <div className='actionFont elFriendlist' style={style_friendlist_outer}>
            <button style={style_friendlist}  onClick={this.onClick_elFriendlist} >
              {this.props.locStrings.profile1_button2_594278}
            </button>
          
          </div>
          
          <div className='actionFont elChatroom' style={style_chatroom_outer}>
            <button style={style_chatroom}  onClick={this.onClick_elChatroom} >
              {this.props.locStrings.profile1_button2_211260}
            </button>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='cardBg elCard' style={style_card_outer}>
              <div style={style_card} />
            
            </div>
            
            <button className='elButtonCopy3' style={style_buttonCopy3}  onClick={this.onClick_elButtonCopy3} >
              {this.props.locStrings.original2_buttoncopy3_915032}
            </button>
            <button className='elButtonCopy2' style={style_buttonCopy2}  >
              {this.props.locStrings.original2_buttoncopy2_692840}
            </button>
            <button className='elButton' style={style_button}  >
              {this.props.locStrings.original2_button_65286}
            </button>
            <div className='font-arialRoundedMTBold  elTextCopy' style={style_textCopy}>
              <div>{this.props.locStrings.original2_textcopy_124940}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText' style={style_text}>
              <div>{this.props.locStrings.original2_text_211312}</div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  

}
