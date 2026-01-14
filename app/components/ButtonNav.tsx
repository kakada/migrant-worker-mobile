import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Color, FontFamily } from '../assets/stylesheets/base_style';
import Style from '../assets/stylesheets/base/style';

interface ButtonNavProps {
  title: string;
  icon: string;
  active?: boolean;
  onPress: () => void;
}

export default class ButtonNav extends React.Component<ButtonNavProps> {
  handlePress = () => {
    this.props.onPress();
  };

  render() {
    const { active } = this.props;
    const textStyle = active ? styles.activeText : styles.inactiveText;
    const buttonStyle = active ? styles.activeButton : styles.inactiveButton;

    return (
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          onPress={this.handlePress}
          style={[styles.buttonTextWrapper, Style.boxShadow, buttonStyle]}>
          <Icon
            name={this.props.icon}
            color={active ? '#fff' : Color.primary}
            size={24}
          />
          <Text style={[styles.buttonText, textStyle]}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  buttonTextWrapper: {
    flexDirection: 'row',
    flex: 1,
    padding: 16,
    marginRight: 10,
    borderRadius: 10,
  },
  buttonText: {
    marginLeft: 10,
    fontFamily: FontFamily.title,
  },
  activeText: {
    color: '#fff',
  },
  inactiveText: {
    color: Color.primary,
  },
  activeButton: {
    backgroundColor: Color.primary,
  },
  inactiveButton: {
    backgroundColor: '#fff',
  },
});
