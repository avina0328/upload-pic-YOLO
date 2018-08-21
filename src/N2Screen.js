import React, { Component } from 'react';
import './App.css';
import img_elN2018071631230 from './images/LoginAndRegisterScreen_elBGpic_526882.jpg';
import img_elN150971380756744 from './images/LoginAndRegisterScreen_elBubble_210045.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';


export default class N2Screen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      fieldCopy: '',
    };
  }

  textInputChanged_fieldCopy = (event) => {
    this.setState({fieldCopy: event.target.value});
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
    const style_n2018071631230 = {
        height: 'auto',
        pointerEvents: 'none',
     };
    const style_n150971380756744 = {
        backgroundImage: 'url('+img_elN150971380756744+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_textCopy2 = {
        fontSize: 31.8,
        color: '#feffff',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 5.3px 14.1px',
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
    const style_buttonCopy = {
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
        pointerEvents: 'none',
     };
    const style_text2 = {
        fontSize: 33.5,
        color: '#feffff',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 5.3px 14.1px',
        pointerEvents: 'none',
     };
    const style_fieldCopy = {
        display: 'block',
        color: '#feffff',
        fontSize: 28.5,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    const style_button2 = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(46, 154, 199, 0.7846)',
        pointerEvents: 'none',
     };
    const style_button3 = {
        display: 'block',
        fontSize: 29.5,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: '#feffff',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen N2Screen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <img className='elN2018071631230' style={style_n2018071631230} src={img_elN2018071631230} alt=""  />
          <div className='elN150971380756744' style={style_n150971380756744} />
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='font-SFUITextBold  elTextCopy2' style={style_textCopy2}>
              <div>{this.props.locStrings.n2_textcopy2_531484}</div>
            </div>
            <div className='font-arialRoundedMTBold  elTextCopy' style={style_textCopy}>
              <div>{this.props.locStrings.n2_textcopy_548395}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText' style={style_text}>
              <div>{this.props.locStrings.n2_text_728750}</div>
            </div>
            <button className='elButtonCopy' style={style_buttonCopy}  >
              {this.props.locStrings.n2_buttoncopy_398558}
            </button>
            <button className='elButton' style={style_button}  >
              {this.props.locStrings.n2_button_679380}
            </button>
            <button className='elButtonCopy2' style={style_buttonCopy2}  >
              {this.props.locStrings.n2_buttoncopy2_928899}
            </button>
            <button className='elButtonCopy3' style={style_buttonCopy3}  >
              {this.props.locStrings.n2_buttoncopy3_371177}
            </button>
            <div className='font-SFUITextBold  elText2' style={style_text2}>
              <div>{this.props.locStrings.n2_text2_178737}</div>
            </div>
            <Input className='elFieldCopy' style={style_fieldCopy} type="email" hint={this.props.locStrings.n2_fieldcopy_741072} onChange={this.textInputChanged_fieldCopy} defaultValue={this.state.fieldCopy}  />
            <Button className='elButton2' style={style_button2}  >
              {this.props.locStrings.n2_button2_960329}
            </Button>
            <button className='elButton3' style={style_button3}  >
              {this.props.locStrings.n2_button3_928521}
            </button>
          </div>
        </div>
      </Container>
    )
  }
  

}
