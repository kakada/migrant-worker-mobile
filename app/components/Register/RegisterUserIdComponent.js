import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Clipboard from '@react-native-clipboard/clipboard';

import styles from '../../styles/registerScreenStyle';
import { Style } from '../../assets/stylesheets/base_style';
import { Color } from '../../assets/stylesheets/base_style';

const RegisterUserIdComponent = (props) => {
  const masked = '*'.repeat(Math.max(0, props.uuid.length - 20)) + props.uuid.slice(-4);
  return (
    <View style={{ marginBottom: 16 }}>
      <View style={[styles.buttonWrapper, Style.boxShadow, {height: 64}]}>
        <View style={[styles.textInputWrapper, props.textContainerStyle]}>
          <Icon name="id-card" size={20} style={styles.inputIcon} />
          <TextInput
            style={[styles.textInput, { marginLeft: 6, color: Color.gray }]}
            value={masked}
            editable={false}
          />

          <TouchableOpacity
            onPress={() => { Clipboard.setString(props.uuid); }}
            style={{justifyContent: 'center', alignItems: 'center', width: 48, height: '100%'}}
          >
            <IonIcon name="copy-outline" size={20} color={Color.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default RegisterUserIdComponent;