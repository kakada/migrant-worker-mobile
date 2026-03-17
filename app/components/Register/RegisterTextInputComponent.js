import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from '../../styles/registerScreenStyle';
import { Style, Color } from '../../assets/stylesheets/base_style';

const RegisterTextInputComponent = (props) => {
  const disabledColor = { color: 'grey' };

  return (
    <View style={{ marginBottom: 16 }}>
      <View style={[styles.buttonWrapper, Style.boxShadow, {height: 64}, !!props.disabled && {backgroundColor: Color.disabledInputColor}]}>
        <View style={[styles.textInputWrapper, props.textContainerStyle]}>
          <Icon name={props.iconName} size={24} style={[styles.inputIcon, !!props.disabled && disabledColor]} />
          <TextInput
            placeholder={props.placeholder}
            placeholderTextColor={!!props.disabled && disabledColor}
            style={[styles.textInput, !!props.disabled && disabledColor ]}
            keyboardType={props.keyboardType || 'default'}
            onChangeText={value => props.onChange(value)}
            value={props.value}
            maxLength={props.maxLength || null}
            editable={!props.disabled ?? true}
          />
          <View style={{justifyContent: 'center', marginRight: 2}}>
            { props.audioButton() }
          </View>
        </View>
      </View>
    </View>
  )
}

export default RegisterTextInputComponent;