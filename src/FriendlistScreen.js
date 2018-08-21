import React, { Component } from 'react';
import './App.css';
import img_elN227 from './images/ResetpasswordScreen_elN227_172900.png';
import img_elN229 from './images/FriendlistScreen_elN229_261279.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Container from 'muicss/lib/react/container';


export default class FriendlistScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      lookforfriend: '',
    };
  }

  textInputChanged_lookforfriend = (event) => {
    this.setState({lookforfriend: event.target.value});
  }
  
  onClick_elButtonCopy3 = (ev) => {
  
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
    const style_text2 = {
        fontSize: 33.5,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'center',
        textShadow: 'rgba(238, 239, 252, 0.5000) 2.3px 2.6px 52.9px',
     };
    const style_text2_outer = {
        pointerEvents: 'none',
     };
    const style_n229 = {
        backgroundImage: 'url('+img_elN229+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_n229_outer = {
        pointerEvents: 'none',
     };
    const style_lookforfriend = {
        display: 'block',
        color: 'rgba(50, 49, 50, 0.9580)',
        fontSize: 26.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
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
      <Container fluid={true} className="AppScreen FriendlistScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elN227' style={style_n227_outer}>
            <div style={style_n227} />
          
          </div>
          
          <div className='elText2' style={style_text2_outer}>
            <div style={style_text2}>
              <div>{this.props.locStrings.friendlist_text2_963369}</div>
            </div>
          
          </div>
          
          <div className='elN229' style={style_n229_outer}>
            <div style={style_n229} />
          
          </div>
          
          <div className='elLookforfriend'>
            <Input style={style_lookforfriend} type="email" hint={this.props.locStrings.friendlist_field_209121} onChange={this.textInputChanged_lookforfriend} defaultValue={this.state.lookforfriend}  />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='cardBg elCard' style={style_card_outer}>
              <div style={style_card} />
            
            </div>
            
            <button className='elButtonCopy3' style={style_buttonCopy3}  onClick={this.onClick_elButtonCopy3} >
              {this.props.locStrings.original2_buttoncopy3_991504}
            </button>
            <button className='elButtonCopy2' style={style_buttonCopy2}  >
              {this.props.locStrings.original2_buttoncopy2_608553}
            </button>
            <button className='elButton' style={style_button}  >
              {this.props.locStrings.original2_button_958144}
            </button>
            <div className='font-arialRoundedMTBold  elTextCopy' style={style_textCopy}>
              <div>{this.props.locStrings.original2_textcopy_299617}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText' style={style_text}>
              <div>{this.props.locStrings.original2_text_811169}</div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  

}
