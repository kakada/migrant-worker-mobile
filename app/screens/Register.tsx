import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontFamily, FontSize } from '../assets/stylesheets/base_style';

export default class Register extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ចុះឈ្មោះ</Text>
        <Text style={styles.text}>Register Screen - Coming Soon</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontFamily: FontFamily.title,
    fontSize: FontSize.title,
    marginBottom: 20,
  },
  text: {
    fontFamily: FontFamily.body,
    fontSize: FontSize.body,
  },
});
