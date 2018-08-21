import React, { Component } from 'react';
import './App.css';
import img_elHomeBG from './images/NewForgetPasswordScreen_elHomeBG_695974.jpg';
import img_elSentVerifyMailBB from './images/NewVerifyEmailScreen_elSentVerifyMailBB_941587.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Container from 'muicss/lib/react/container';


export default class NewVerifyEmailScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field_PlzEnterAccount: '',
    };
  }

  textInputChanged_field_PlzEnterAccount = (event) => {
    this.setState({field_PlzEnterAccount: event.target.value});
  }
  
  onClick_elButton_GotAccountAlready = (ev) => {
    // Go to screen 'NewLoginAndRegister'
    this.props.appActions.goToScreen('newloginandregister', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton_Confirm = (ev) => {
    // Go to screen 'NewEmailSent'
    this.props.appActions.goToScreen('newemailsent', { transitionId: 'fadeIn' });
  
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
    const style_sentVerifyMailBB = {
        height: 'auto',
     };
    const style_sentVerifyMailBB_outer = {
        pointerEvents: 'none',
     };
    const style_field_PlzEnterAccount = {
        display: 'block',
        color: '#feffff',
        fontSize: 23.5,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    const style_button_GotAccountAlready = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_GotAccountAlready_outer = {
        cursor: 'pointer',
     };
    const style_button_Confirm = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_Confirm_outer = {
        cursor: 'pointer',
     };
    const style_card = {
        width: '100%',
        height: '100%',
     };
    const style_card_outer = {
        display: 'none',
        backgroundColor: 'white',
        boxShadow: '0.0px 5.3px 37px rgba(0, 0, 0, 0.4500)',
        pointerEvents: 'none',
     };
    const style_text_Slogan = {
        fontSize: 18.4,
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    const style_text_Yolo = {
        fontSize: 33.5,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen NewVerifyEmailScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elHomeBG' style={style_homeBG_outer}>
            <img style={style_homeBG} src={img_elHomeBG} alt=""  />
          
          </div>
          
          <div className='elSentVerifyMailBB' style={style_sentVerifyMailBB_outer}>
            <img style={style_sentVerifyMailBB} src={img_elSentVerifyMailBB} alt=""  />
          
          </div>
          
          <div className='elField_PlzEnterAccount'>
            <Input style={style_field_PlzEnterAccount} type="text" hint={this.props.locStrings.newloginandregister3_field_plzenteraccount_327031} onChange={this.textInputChanged_field_PlzEnterAccount} defaultValue={this.state.field_PlzEnterAccount}  />
          
          </div>
          
          <div className='actionFont elButton_GotAccountAlready' style={style_button_GotAccountAlready_outer}>
            <div style={style_button_GotAccountAlready}  onClick={this.onClick_elButton_GotAccountAlready}  />
          
          </div>
          
          <div className='actionFont elButton_Confirm' style={style_button_Confirm_outer}>
            <div style={style_button_Confirm}  onClick={this.onClick_elButton_Confirm}  />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='cardBg elCard' style={style_card_outer}>
              <div style={style_card} />
            
            </div>
            
            <div className='font-arialRoundedMTBold  elText_Slogan' style={style_text_Slogan}>
              <div>{this.props.locStrings.newloginandregister3_text_slogan_143609}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText_Yolo' style={style_text_Yolo}>
              <div>{this.props.locStrings.newloginandregister3_text_yolo_933822}</div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  

}
