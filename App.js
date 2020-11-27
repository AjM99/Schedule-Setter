
import React, { Component } from 'react';
import { StyleSheet,Text, View,ImageBackground,Image, TextInput, Dimensions, TouchableOpacity, } from 'react-native';
import bgImage from './images/bg1.jpg'
import LOGO from './images/logo4.png'
import Icon from 'react-native-vector-icons/Ionicons'
import {createStackNavigation,createAppContainer} from 'react-navigation'
import * as firebase from 'firebase';

const {width: WIDTH } = Dimensions.get('window')

// importing screens
 import HomeSr from './screens/HomeSr'
 import LoadingSr from './screens/LoadingSr'
 import SigninSr from './screens/SigninSr'
 import SignupSr from './screens/SignupSr'
/*
var firebaseConfig = {
  apiKey: "AIzaSyBC1Yzlm6TyY9gz2Y7Z6Qt2k8qdLt0rqbY",
  authDomain: "reactnativesample-48112.firebaseapp.com",
  databaseURL: "https://reactnativesample-48112.firebaseio.com",
  projectId: "reactnativesample-48112",
  storageBucket: "reactnativesample-48112.appspot.com",
  messagingSenderId: "600676306437",
  appId: "1:600676306437:web:2f199b44a9cf40bb39166c",
  measurementId: "G-L920VSCMKB"
};*/

//firebase.initializeApp(firebaseConfig);


const MainNavigator = createStackNavigation(
  {
    Loading:{screen:LoadingSr},
    Signin:{screen:SigninSr},
    Signup:{screen:SignupSr},
    Home:{screen:HomeSr},  
  },
  {
    initialRouteName:'Loading'
  }
)
//const App = createAppContainer(MainNavigator);

export default class App extends  React.Component {
  constructor() 
{
  super()
  this.state = {
    showPass : true,
    press: false
  }
}
  showPass = () =>
  {
    if(this.state.press == false)
    {
        this.setState({showPass: false, press: true})     
    }
    else
    {
      this.setState({showPass: true , press:false})  
    }
  }
  render() {
  return (
      <View>
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <View style={styles.logoContainer}>
              <Image source={LOGO} style={styles.Logo}/>
              <Text style={styles.logoText}>Welcome !!!</Text>
          </View>
          <View style={styles.UserInput}>                                            
             <Icon name={'ios-person'} size={28} color={'rgba(255,255,255,0.7)'}
              style={styles.IconDesign}/>
              <TextInput
                  style={styles.input}
                  placeholder={'Username'}
                  placeholderTextColor={'rgba(255,255,255,0.7)'}    //without proper placeholderTextcolor placeholder wont come,
                  underlineColorAndroid='transparent'
              />
          </View>
          
          <View style={styles.UserInput}>               
          <Icon name={'ios-lock'} size={28} color={'rgba(255,255,255,0.7)'} // UserInput used here as well to apply for both of them
           style={styles.IconDesign}/>
           <TextInput
               style={styles.input}
               placeholder={'password'}
               secureTextEntry={this.state.showPass}         //for *** of password
               placeholderTextColor={'rgba(255,255,255,0.7)'}    //without proper placeholderTextcolor placeholder wont come,
               underlineColorAndroid='transparent'
           />
           <TouchableOpacity style={styles.DeadEye}
                onPress= {this.showPass.bind(this)}>
                <Icon name={this.state.press == false ?'ios-eye' :'ios-eye-off'} size={28} color={'rgba(255,255,255,0.7)'}/>
           </TouchableOpacity>
       </View>
       <TouchableOpacity style={styles.LoginButton}>
              <Text style={styles.TEXTDesign}>Login</Text>
           </TouchableOpacity>
      </ImageBackground>
      </View>
   
  );
}
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  Logo:
  {
    width:120,
    height: 120,
    opacity:1
  },
  logoContainer:
  {
    alignItems:'center'

  },
  logoText:
  {
    color:'black',
    fontSize:40,
    fontWeight:'500',
    marginTop: 10,
    opacity:0.5
  },
  input:
  {
    width: WIDTH -55,
    height:45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft:45,
    backgroundColor:'rgba(0, 0, 0, 0.35)',
    color:'rgba(255,255,255,0.7)',
    marginHorizontal:25
  },
  IconDesign:
  {
    position:'absolute',
    top:5,
    left:40
  },
  UserInput:
  {
    marginTop:10,
  },
  DeadEye:
  {
    position:'absolute',
    top:7,
    left:350
  },
  LoginButton:
  {
    width: WIDTH -55,   //wirdth,height,bradius copied from input
    height:45,
    borderRadius: 45,
    backgroundColor:'#0A79DF',
    marginTop:20
  },
  TEXTDesign:
  {
    textAlign:'center',
    color:'rgba(255,255,255,0.7)',
    fontSize:30
  }
});

