import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
type Props = {};
export default class DashBoard extends Component<Props> {
  
    render()  ;
    
          componentDidMount() {
            this.setState({
              messages: [
                {
                  _id: 1,
                  text: "",
                  createdAt: new Date(),
                  note: {
                    _id: 1,
                    description: "",
                   
                  }
                }
              ]
            });
          }
    
          render() {
            return <DashBoard messages={this.state.messages} />;
          }
        }
      