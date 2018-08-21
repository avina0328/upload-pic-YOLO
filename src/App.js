import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
import './App.css';
import ResetpasswordScreen from './ResetpasswordScreen.js';
import LogoutScreen from './LogoutScreen.js';
import FriendlistScreen from './FriendlistScreen.js';
import ChatroomScreen from './ChatroomScreen.js';
import NewEmailSentScreen from './NewEmailSentScreen.js';
import NewpostScreen from './NewpostScreen.js';
import Profile1Screen from './Profile1Screen.js';
import UploadProfilePicScreen from './UploadProfilePicScreen.js';
import NewForgetPasswordScreen from './NewForgetPasswordScreen.js';
import NewVerifyEmailScreen from './NewVerifyEmailScreen.js';
import FirstPageScreen from './FirstPageScreen.js';
import NewLoginAndRegisterScreen from './NewLoginAndRegisterScreen.js';
import LoginAndRegisterScreen from './LoginAndRegisterScreen.js';
import BubbleDiaryScreen from './BubbleDiaryScreen.js';
import Start3Screen from './Start3Screen.js';
import Start4Screen from './Start4Screen.js';
import N2Screen from './N2Screen.js';
import NeontoExport0x7fabc359acd0Screen from './NeontoExport0x7fabc359acd0Screen.js';
import RegisterScreen from './RegisterScreen.js';
import EmailSentScreen from './EmailSentScreen.js';
import VertifyEmailScreen from './VertifyEmailScreen.js';
import ForgetPasswordScreen from './ForgetPasswordScreen.js';
import Start5Screen from './Start5Screen.js';
import FirstUpProfilePicScreen from './FirstUpProfilePicScreen.js';
import ProfileScreen from './ProfileScreen.js';
import Profile2Screen from './Profile2Screen.js';
import HomePage2ScollScreen from './HomePage2ScollScreen.js';
import ScrollModelFirstUpProfilePicScreen from './ScrollModelFirstUpProfilePicScreen.js';
import ScrollTestScreen from './ScrollTestScreen.js';
import NewScrollModelFirstUpProfilePicScreen from './NewScrollModelFirstUpProfilePicScreen.js';
import NewLoginAndRegister2Screen from './NewLoginAndRegister2Screen.js';
import OriginalScreen from './OriginalScreen.js';
import Original4Screen from './Original4Screen.js';
import DataSheet_localizationSheet from './DataSheet_localizationSheet.js';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.dataSheets = {};
    this.dataSheets['localizationSheet'] = new DataSheet_localizationSheet('localizationSheet', this.dataSheetDidUpdate);

    this.dataSlots = {};
    this.dataSlots['ds_activeLang'] = "en";

    this.updateLocalizationFromDataSheet(this.dataSheets['localizationSheet']);

    this.state = {
      currentScreen: 'newloginandregister',
      currentScreenProps: {},
      screenFormatId: '',
      screenTransitionForward: true,
    }
    this.screenHistory = [ {...this.state} ];

  }

  windowDidResize = () => {
    let w = window.innerWidth;
    let formatId;
    if (w < 576) formatId = 'narrow-phone';
    else if (w < 768) formatId = 'wide-phone';
    else if (w < 1024) formatId = 'narrow-tablet';
    else formatId = 'wide-tablet';
    if (formatId !== this.state.screenFormatId) {
      this.setState({screenFormatId: formatId});
    }
  }

  componentDidMount() {
    this.windowDidResize();
    window.addEventListener('resize', this.windowDidResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowDidResize);
  }

  isLoading() {
    return this.state.loading;
  }

  goToScreen = (screenId, props) => {
    // This method is the default implementation and could be customized by a navigation plugin.

    let screenIdx = -1;  // Check if the screen is already in the history stack, and pop back if so
    for (let i = 0; i < this.screenHistory.length; i++) {
      if (this.screenHistory[i].currentScreen === screenId) {
        screenIdx = i;
        break;
      }
    }
    if (screenIdx > -1) {
      this.screenHistory.splice(screenIdx + 1, this.screenHistory.length - screenIdx - 1);
      let prevScreenState = this.screenHistory[screenIdx];
      this.setState({...prevScreenState, screenTransitionForward: false});
    }
    else {
      props = props || {};
      let screenState = {currentScreen: screenId, currentScreenProps: props};
      this.screenHistory.push(screenState);
      this.setState({...screenState, screenTransitionForward: true});
    }
    window.scrollTo(0, 0);
  }

  goBack = () => {
    // This method is the default implementation and could be customized by a navigation plugin.
    if (this.screenHistory.length < 2)
      return;

    this.screenHistory.splice(this.screenHistory.length - 1, 1);
    let prevScreenState = this.screenHistory[this.screenHistory.length - 1];
    this.setState({...prevScreenState, screenTransitionForward: false});
    window.scrollTo(0, 0);
  }

  getDataSheet = (sheetId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    return this.dataSheets[sheetId];
  }

  addToDataSheet = (sheetId, newRow, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && newRow) {
      sheet.addItem(newRow, this['serviceOptions_'+sheetId] || {});
    }
    this.setState(this.state);
  }

  updateInDataSheet = (sheetId, row, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.replaceItemByKey(row.key, row, this['serviceOptions_'+sheetId] || {});

      if (this.state.currentScreenProps.dataSheetRow) {
        let screenProps = {...this.state.currentScreenProps};
        screenProps.dataSheetRow = row;

        // Also update any props that were carried into a detail view
        for (let prop in screenProps) {
          if (row[prop] !== undefined) {
            screenProps[prop] = row[prop];
          }
        }
        this.setState({currentScreenProps: screenProps});
      } else {
        this.setState(this.state);
      }
    }
  }

  removeFromDataSheet = (sheetId, row) => {
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.removeItem(row, this['serviceOptions_'+sheetId] || {});
    }
    this.setState(this.state);
  }

  updateDataSlot = (slotId, value, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.dataSlots[slotId] = value;
    if (slotId === 'ds_activeLang') {
      this.locStrings.setLanguage(value);
    }
    this.setState(this.state);
  }

  dataSheetDidUpdate = (dataSheet) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.setState(this.state);
  }

  updateLocalizationFromDataSheet = (dataSheet) => {
    const stringsObj = dataSheet.getStringsByLanguage();
    if (stringsObj && Object.keys(stringsObj).length > 0) {
      this.locStrings = new LocalizedStrings(stringsObj);
    } else {
      this.locStrings = new LocalizedStrings({en: {}});
    }
    this.locStrings.setLanguage(this.dataSlots['ds_activeLang']);
  }

  render() {
    let makeElementForScreen = (screenId, baseProps, atTop, forward) => {
      let screenProps = {
        ...baseProps,
        atTopOfScreenStack: atTop,
        transitionForward: forward,
        appActions: this,
        dataSheets: this.dataSheets,
        locStrings: this.locStrings,
        deviceInfo: {
          screenFormatId: this.state.screenFormatId
        },
        ds_activeLang: this.dataSlots['ds_activeLang'],
      };
      switch (screenId) {
        default:
          return null;
        case 'resetpassword':
          return (<ResetpasswordScreen {...screenProps} />)
        case 'logout':
          return (<LogoutScreen {...screenProps} />)
        case 'friendlist':
          return (<FriendlistScreen {...screenProps} />)
        case 'chatroom':
          return (<ChatroomScreen {...screenProps} />)
        case 'newemailsent':
          return (<NewEmailSentScreen {...screenProps} />)
        case 'newpost':
          return (<NewpostScreen {...screenProps} />)
        case 'profile1':
          return (<Profile1Screen {...screenProps} />)
        case 'uploadprofilepic':
          return (<UploadProfilePicScreen {...screenProps} />)
        case 'newforgetpassword':
          return (<NewForgetPasswordScreen {...screenProps} />)
        case 'newverifyemail':
          return (<NewVerifyEmailScreen {...screenProps} />)
        case 'firstpage':
          return (<FirstPageScreen {...screenProps} />)
        case 'newloginandregister':
          return (<NewLoginAndRegisterScreen {...screenProps} />)
        case 'loginandregister':
          return (<LoginAndRegisterScreen {...screenProps} />)
        case 'bubblediary':
          return (<BubbleDiaryScreen {...screenProps} />)
        case 'start3':
          return (<Start3Screen {...screenProps} />)
        case 'start4':
          return (<Start4Screen {...screenProps} />)
        case 'n2':
          return (<N2Screen {...screenProps} />)
        case 'n':
          return (<NeontoExport0x7fabc359acd0Screen {...screenProps} />)
        case 'register':
          return (<RegisterScreen {...screenProps} />)
        case 'emailsent':
          return (<EmailSentScreen {...screenProps} />)
        case 'vertifyemail':
          return (<VertifyEmailScreen {...screenProps} />)
        case 'forgetpassword':
          return (<ForgetPasswordScreen {...screenProps} />)
        case 'start5':
          return (<Start5Screen {...screenProps} />)
        case 'firstupprofilepic':
          return (<FirstUpProfilePicScreen {...screenProps} />)
        case 'profile':
          return (<ProfileScreen {...screenProps} />)
        case 'profile2':
          return (<Profile2Screen {...screenProps} />)
        case 'homepage2scoll':
          return (<HomePage2ScollScreen {...screenProps} />)
        case 'scrollmodelfirstupprofilepic':
          return (<ScrollModelFirstUpProfilePicScreen {...screenProps} />)
        case 'scrolltest':
          return (<ScrollTestScreen {...screenProps} />)
        case 'newscrollmodelfirstupprofilepic':
          return (<NewScrollModelFirstUpProfilePicScreen {...screenProps} />)
        case 'newloginandregister2':
          return (<NewLoginAndRegister2Screen {...screenProps} />)
        case 'original':
          return (<OriginalScreen {...screenProps} />)
        case 'original4':
          return (<Original4Screen {...screenProps} />)
      }
    }

    let screenEl = makeElementForScreen(this.state.currentScreen, this.state.currentScreenProps, true, this.state.screenTransitionForward);
    let prevScreenEl = null;
    if (this.screenHistory.length >= 2) {  // For transitions, we want to show the previous screen below
      let prevScreenState = this.screenHistory[this.screenHistory.length - 2];
      prevScreenEl = makeElementForScreen(prevScreenState.currentScreen, prevScreenState.currentScreenProps, false, this.state.screenTransitionForward);
    }

    return (
      <div className="App">
        {prevScreenEl}
        {screenEl}
      </div>
    );
  }
}
