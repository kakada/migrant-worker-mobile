import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class HomeButton extends Component {
  onPress() {
    if(!!this.props.onPress) {
      return this.props.onPress();
    }

    this.props.navigation.popToTop();
  }

  render() {
    return (
      <TouchableOpacity
        style={{width: 48, justifyContent: 'center', alignItems: 'flex-end'}}
        onPress={() => this.onPress()}>

        <Icon name={'home'} size={26} style={{color: '#fff'}}/>
      </TouchableOpacity>
    );
  }
}

export default HomeButton;
