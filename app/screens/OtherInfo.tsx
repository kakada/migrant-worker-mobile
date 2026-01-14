import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontFamily, FontSize } from '../assets/stylesheets/base_style';

export default class OtherInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ចំណាកស្រុកសុវត្ថិភាព</Text>
        <Text style={styles.text}>Safe Migration Info Screen - Coming Soon</Text>
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
