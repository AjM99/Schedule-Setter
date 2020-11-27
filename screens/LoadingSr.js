import React from 'react';
import { StyleSheet,ActivityIndicator,Text, View,ImageBackground,Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';

import * as firebase from 'firebase';
import { TabHeading } from 'native-base';

export default class LoadingSr extends React.Component {
    static navigationOptions =
{
   titel : 'Loading',
   header:null 
};

componentDidMount()
{
    firebase.auth().onAuthStateChanged((authenticate) =>
    {
        if (authenticate)
        {
            this.props.navigation.repalce('Home')
        }
        else
        {
            this.props.navigation.repalce('Signin')
        }
    }
    )
}

    render()
    {
        return(
                <View>
                    <ActivityIndicator size='large'></ActivityIndicator>
                </View>
            )
    }
}