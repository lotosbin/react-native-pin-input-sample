/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Alert,
  AppRegistry,
  StyleSheet,
    TouchableOpacity,
  Text,
  View
} from 'react-native';
import PinInput from 'react-native-pin-input';



export default class sample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: '',
            getPin: ''
        }
    }
  render() {
    return (
      <View style={styles.container}>
          <PinInput
              ref={pin => this.pin = pin}
              autoFocus={false}
              pinLength={6}
              // value={'654321'}
              pinItemStyle={{width: 50, height: 50}}
              pinItemProps={{keyboardType: 'number-pad', returnKeyType: 'done', secureTextEntry: true}}
              onPinCompleted={(pin) => {
                  this.setState({pin: pin})
              }}
          />
          <Text>
              Pin:{this.state.pin}
          </Text>
          <TouchableOpacity onPress={() => this.pin.setPin('123456')}>
              <Text>Set Pin</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({getPin: this.pin.getPin()})}>
              <Text>get Pin</Text>
          </TouchableOpacity>
          <Text>get pin:{this.state.getPin}</Text>
          <TouchableOpacity onPress={() => this.pin.clearPin()}>
              <Text>clear Pin</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pin.focusPin(0)}>
              <Text>Focus Pin</Text>
          </TouchableOpacity>

          <Text style={styles.welcome}>
              Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
              To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
              Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
          </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('sample', () => sample);
