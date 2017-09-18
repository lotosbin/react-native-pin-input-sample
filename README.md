# react-native-pin-input-sample

A sample for [react-native-pin-input](https://github.com/lotosbin/react-native-pin-input)

# Installation
```
npm install --save react-native-pin-input
```
or
```
yarn add react-native-pin-input
```

# Sample

set keyboardType
```jsx harmony
        <PinInput
              ref={"pin"}
              pinLength={6}
              pinItemStyle={{width: 50, height: 50}}
              pinItemProps={{keyboardType:'number-pad'}}
              onPinCompleted={(pin) => {
                  this.setState({pin: pin})
              }}
          />
```
## method
- setPin

```javascript
this.refs.pin.setPin('123456')
```
- getPin
```javascript
const pin = this.refs.pin.getPin()
```
- clearPin
```javascript
this.refs.pin.clearPin()
```