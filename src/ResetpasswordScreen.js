import React, { Component } from 'react';
import './App.css';
import img_elN227 from './images/ResetpasswordScreen_elN227_172900.png';
import img_elResetpassword from './images/ResetpasswordScreen_elResetpassword_866142.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Container from 'muicss/lib/react/container';


export default class ResetpasswordScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      newpassword: '',
      confirmnewpassword: '',
    };
  }

  textInputChanged_newpassword = (event) => {
    this.setState({newpassword: event.target.value});
  }
  
  textInputChanged_confirmnewpassword = (event) => {
    this.setState({confirmnewpassword: event.target.value});
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
    const style_n227 = {
        backgroundImage: 'url('+img_elN227+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_n227_outer = {
        boxShadow: '0.0px 5.3px 37px rgba(0, 0, 0, 0.4500)',
        pointerEvents: 'none',
     };
    const style_newpassword = {
        display: 'block',
        fontSize: 16.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
     };
    const style_confirmnewpassword = {
        display: 'block',
        fontSize: 16.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
     };
    const style_resetpassword = {
        backgroundImage: 'url('+img_elResetpassword+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_resetpassword_outer = {
        pointerEvents: 'none',
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
      <Container fluid={true} className="AppScreen ResetpasswordScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elN227' style={style_n227_outer}>
            <div style={style_n227} />
          
          </div>
          
          <div className="flowRow flowRow_ResetpasswordScreen_elNewpassword_383235">
          <div className='elNewpassword'>
            <Input style={style_newpassword} type="text" hint={this.props.locStrings.resetpassword_field_383235} onChange={this.textInputChanged_newpassword} defaultValue={this.state.newpassword}  />
          
          </div>
          
          <div className='elConfirmnewpassword'>
            <Input style={style_confirmnewpassword} type="text" hint={this.props.locStrings.resetpassword_fieldcopy_280277} onChange={this.textInputChanged_confirmnewpassword} defaultValue={this.state.confirmnewpassword}  />
          
          </div>
          
          </div>
          <div className='elResetpassword' style={style_resetpassword_outer}>
            <div style={style_resetpassword} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='cardBg elCard' style={style_card_outer}>
              <div style={style_card} />
            
            </div>
            
            <button className='elButtonCopy2' style={style_buttonCopy2}  >
              {this.props.locStrings.original2_buttoncopy2_416591}
            </button>
            <button className='elButtonCopy3' style={style_buttonCopy3}  onClick={this.onClick_elButtonCopy3} >
              {this.props.locStrings.original2_buttoncopy3_1029324}
            </button>
            <button className='elButton' style={style_button}  >
              {this.props.locStrings.original2_button_708882}
            </button>
            <div className='font-arialRoundedMTBold  elTextCopy' style={style_textCopy}>
              <div>{this.props.locStrings.original2_textcopy_76533}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText' style={style_text}>
              <div>{this.props.locStrings.original2_text_782510}</div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  

}
