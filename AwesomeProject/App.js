/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Linking, TouchableOpacity} from 'react-native';
import DashBoard from './src/dashboard' ;

import note from './src/note' ;

type Props = {};
export default class App extends Component<Props> {
  state = {
    isLogin : true,
    isLogged : false
  }

  render() {
    return (
     
      <View style={styles.container}>
        <View style={{height:100, justifyContent: 'center', alignItems: 'center'}}>
      
          <Image source={require('./asset/icone_eval.png')} style={{height:100, width:100}}/>
        </View>
        {
          (this.state.isLogged) ? (
            <DashBoard />
          ) : (
            (this.state.isLogin) ? (
              <LoginForm setParentState={this.setState.bind(this)}/>
            )  : (
              <AccountForm setParentState={this.setState.bind(this)}/>
            )
          )
        }
        <View style={{height:100, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={()=>{Linking.openURL("http://swaplive.it-students.fr/cgu")}}>
            <Text>Conditions Générales d'Utilisation</Text>
          </TouchableOpacity>
        </View>
      </View>
      

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   paddingTop:50,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2352ed',
    paddingHorizontal:10
  },
  form : {
    flexDirection:'column',
    alignItems:'stretch',
    alignSelf: 'stretch',
    flex:1,
  },
  button : {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    alignSelf: 'stretch',
    marginHorizontal:30,
    padding: 10,
  },
  link : {
    alignItems: 'flex-end',
    marginHorizontal:30,
    marginTop:30,
    padding: 10,
  },
  input : {
    height: 40,
    borderColor:'silver',
    borderWidth:1,
    alignSelf: 'stretch',
    // flex: 1,
    paddingHorizontal: 5,
    marginBottom:10
  },
});
