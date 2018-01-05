/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, TouchableOpacity, Text, View, Keyboard} from 'react-native';
import PinInput from 'react-native-pin-input';


export class sample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: '',
            getPin: '',
            log: "",
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<PinInput*/}
                {/*ref={pin => this.pin = pin}*/}
                {/*autoFocus={false}*/}
                {/*pinLength={6}*/}
                {/*placeHolder={' '}*/}
                {/*// value={'654321'}*/}
                {/*pinItemStyle={{width: 50, height: 50}}*/}
                {/*pinItemProps={{keyboardType: 'number-pad', returnKeyType: 'done', secureTextEntry: true}}*/}
                {/*onPinCompleted={(pin) => {*/}
                {/*this.setState({pin: pin})*/}
                {/*}}*/}
                {/*/>*/}
                <PinInput
                    ref={(input) => {
                        this.pin = input;
                    }}
                    text=""
                    pinLength={4}
                    pinItemStyle={{width: 50, height: 50, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 2, borderColor: 'green'}}
                    pinItemProps={{keyboardType: 'number-pad', returnKeyType: 'done', secureTextEntry: false}}
                    placeholder={'_'}
                    onPinCompleted={(pin) => {
                        this.setState({pin: pin});
                        Keyboard.dismiss();
                    }}
                    onPinKeyPress={(e, i) => {
                        let message = `i:${i},key:${e.nativeEvent.key}`;
                        console.log(message)
                        this.setState({log: this.state.log + message})
                    }}
                    containerStyle={{backgroundColor: 'transparent'}}
                    containerPinStyle={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        marginTop: 20,
                    }}
                />
                <Text>
                    Pin:{this.state.pin}
                </Text>
                <TouchableOpacity onPress={() => this.pin.setPin('1_34')}>
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
                <Text>{this.state.log}</Text>
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

