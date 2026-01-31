import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { FontFamily } from '../../assets/stylesheets/base_style';

const OutlineButtonComponent = (props) => {
  return <TouchableOpacity onPress={() => props.onPress()} style={[{paddingHorizontal: 5, marginRight: 5, borderWidth: 1.5, borderColor: props.color, borderRadius: 6, height: 48, paddingHorizontal: 12, justifyContent: 'center'}, props.style]}>
            <Text style={{color: props.color, fontFamily: FontFamily.body}}>{props.label}</Text>
          </TouchableOpacity>
}

export default OutlineButtonComponent;