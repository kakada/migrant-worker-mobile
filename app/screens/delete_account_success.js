// import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useDispatch } from 'react-redux';

import { Color } from '../assets/stylesheets/base_style';
import { FontFamily, FontSize } from '../assets/stylesheets/base_style';
import BigButtonComponent from '../components/shared/BigButtonComponent';
import { setCurrentUser } from '../actions/currentUserAction';

const DeleteAccountSuccessScreen = () => {
  const dispatch = useDispatch();

  return (
    <View style={{flexGrow: 1, padding: 16, justifyContent: 'center'}}>
      <LottieView
        source={require('../assets/images/done.json')}
        autoPlay loop
        style={{ width: 160, height: 160, alignSelf: 'center', marginBottom: 12 }}
      />
      <Text style={styles.title}>
        ការស្នើសុំដើម្បីលុបគណនី
      </Text>
      <Text style={styles.title}>
        Account Deletion Requested
      </Text>

      <View style={{width: '100%', height: 2, marginVertical: 22, marginBottom: 32, backgroundColor: Color.border, borderRadius: 4}}/>

      <Text style={styles.body}>
        យើងសោកស្តាយដែលបានឃើញអ្នកចាកចេញពីកម្មវិធី។ ការស្នើសុំដើម្បីលុបគណនីរបស់អ្នកត្រូវបានទទួល។
      </Text>
      <Text style={styles.body}>
        We're sorry to see you go. Your request to delete your account has been received.
      </Text>
      <Text style={[styles.body, { marginTop: 16 }]}>
        គណនីរបស់អ្នកឥឡូវត្រូវបានកំណត់ពេលសម្រាប់លុប ហើយនឹងត្រូវបានលុបចោលជាអចិន្ត្រៃយ៍បន្ទាប់ពី 30 ថ្ងៃ។
      </Text>
      <Text style={styles.body}>
        Your account is now scheduled for deletion and will be permanently removed after 30 days.
      </Text>

      <BigButtonComponent
        label="ចាកចេញ"
        buttonStyle={{marginTop: 32}}
        onPress={() => {
          dispatch(setCurrentUser(null));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: FontFamily.title,
    fontSize: FontSize.title,
    textAlign: 'center'
  },
  body: {
    fontFamily: FontFamily.body,
    fotnSize: FontSize.body,
    textAlign: 'center'
  }
});

export default DeleteAccountSuccessScreen;