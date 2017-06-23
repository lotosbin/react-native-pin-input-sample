# react-native-pin-input-sample


# Sample

set keyboardType
```jsx harmony
        <PinInput
              pinLength={6}
              pinItemStyle={{width: 50, height: 50}}
              pinItemProps={{keyboardType:'number-pad'}}
              onPinCompleted={(pin) => {
                  this.setState({pin: pin})
              }}
          />
```