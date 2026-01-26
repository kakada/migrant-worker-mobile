import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Color, FontFamily } from '../../assets/stylesheets/base_style';

const SectionSeparatorComponent = ({label}) => {
  return (
    <View style={styles.separatorCover}>
      <View style={styles.line} />
      <View style={styles.separatorCoverLabel}>
        <Text style={styles.separatorLabel}>{label}</Text>
      </View>
      <View style={styles.line} />
    </View>
  )
}

const styles = StyleSheet.create({
  separatorCover: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Color.border
  },
  separatorCoverLabel: {
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginBottom: 5
  },
  separatorLabel: {
    fontWeight: '700',
    fontFamily: FontFamily.title,
    color: Color.gray
  },
});

export default SectionSeparatorComponent;