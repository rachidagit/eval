import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput,textArea, Button } from 'react-native';
type Props = {};
export default class Disscussion extends Component<Props> {
    render(){
      let { width } = Dimensions.get('window');
    width = width * 0.9;
        return(
        





<View style={styles.textAreaContainer} >
        
      </View>
      <TextInput
      style={styles.style={styles.textArea}}
      autoCapitalize={'none'}
      placeholder="msg"
      multiline={true}
      onChangeText={(this)=>this.setState({text})}
      value={this.state.text}
    />
      <TextInput
          style={styles.textAreaContainer}
          autoCapitalize={'none'}
          placeholder="msg"
          multiline={true}
          onChangeText={(this)=>this.setState({text})}
          value={this.state.text}
        />
        <Button
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="+"
/>
        );
  }
  
}




const styles = StyleSheet.create({
  form : {
    textAreaContainer: {
      borderColor: COLORS.blue20,
      borderWidth: 1,
      padding: 5
    },
    textArea: {
      height: 150,
      justifyContent: "flex-start"
    }
  }
})