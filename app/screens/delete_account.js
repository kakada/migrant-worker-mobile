import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {BottomSheetPicker} from 'react-native-bottom-sheet-picker';

import { Color } from '../assets/stylesheets/base_style';
import { FontFamily, FontSize } from '../assets/stylesheets/base_style';
import { Style } from '../assets/stylesheets/base_style';
import BigButtonComponent from '../components/shared/BigButtonComponent';
import DeleteReason from '../models/DeleteReason';
import UserService from '../services/user_service';

const DeleteAccountScreen = () => {
  const [userId, setUserId] = useState(null);
  const [selectedReason, setSelectedReason] = useState(null);
  const deleteReasons = DeleteReason.getAll().map(item => {
    return { label: item['name_km'], value: item['id'] }
  });

  const customBottomSheetTitle = () => {
    return (
      <React.Fragment>
        <Text style={{fontSize: 18, marginBottom: 20, paddingHorizontal: 16, fontFamily: FontFamily.title, color: 'black'}}>
          ជ្រើសរើសមូលហេតុ
        </Text>
        <View style={{position: 'relative'}}>
          <View style={{flex: 1, borderColor: '#D3D3D3', borderWidth: 2, borderStyle: 'dashed', borderRadius: 1}}/>
          <View style={{position: 'absolute', width: '100%', backgroundColor: 'white', height: 4, bottom: -1.2}}/>
        </View>
      </React.Fragment>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flexGrow: 1, padding: 16}}>
        <Text style={styles.label}>
          សូមបញ្ចូលលេខសម្គាល់អ្នកប្រើប្រាស់របស់អ្នក និងជ្រើសរើសមូលហេតុសម្រាប់លុបគណនីរបស់អ្នក។
        </Text>
        <Text style={[styles.label, { marginTop: 8 }]}>
          Please enter your user ID and select a reason for deleting your account.
        </Text>

        <View style={{width: '100%', height: 2, marginVertical: 22, backgroundColor: Color.border, borderRadius: 4}}/>

        <Text style={styles.label}>
          លេខសម្គាល់អ្នកប្រើប្រាស់ / User ID *
        </Text>
        <View style={[styles.buttonWrapper, Style.boxShadow, {height: 64}]}>
          <TextInput
            placeholder='បញ្ចូលលេខសម្គាល់អ្នកប្រើប្រាស់របស់អ្នក'
            value={userId}
            style={styles.textInput}
            onChangeText={(value) => setUserId(value)}
          />
        </View>

        <Text style={[styles.label, { marginTop: 26 }]}>
          មូលហេតុសម្រាប់លុប / Reason for deletion *
        </Text>
        <BottomSheetPicker
          bottomSheetTitle="ជ្រើសរើសមូលហេតុ"
          placeholder="ជ្រើសរើសមូលហេតុ"
          placeholderStyle={styles.label}
          primaryColor={Color.primary}
          pickerStyle={[Style.boxShadow, { height: 64, paddingLeft: 16, paddingRight: 6 }]}
          itemTextStyle={styles.label}
          items={deleteReasons}
          bottomSheetTitleStyle={{fontFamily: FontFamily.title}}
          titleFontFamily={FontFamily.title}
          customBottomSheetTitle={customBottomSheetTitle()}
          hideListItemAudio={true}
          selectedItem={selectedReason}
          onSelectItem={(item) => setSelectedReason(item)}
        />

        <BigButtonComponent
          label="លុបគណនីរបស់ខ្ញុំ / Delete My Account"
          buttonStyle={{marginTop: 32, backgroundColor: Color.red}}
          disabled={!userId || !selectedReason}
          onPress={() => {
            new UserService().destroy({
              userId: userId,
              deleteReasonId: selectedReason
            });
          }}
        />

        <Text style={[styles.noteLabel, {marginTop: 18}]}>
          *** គណនីរបស់អ្នកនឹងត្រូវបានកំណត់ពេលសម្រាប់លុប។ ទិន្នន័យនឹងត្រូវបានលុបចោលជាអចិន្ត្រៃយ៍បន្ទាប់ពី 30 ថ្ងៃ។
        </Text>
        <Text style={styles.noteLabel}>
          Your account will be scheduled for deletion. The data will be permanently removed after 30 days.
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  label: {
    fontFamily: FontFamily.body,
    fontSize: FontSize.body,
  },
  buttonWrapper: {
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: Color.white,
    borderColor: Color.border,
    marginTop: 10
  },
  textInput: {
    height: 52,
    flex: 1,
    fontSize: FontSize.body,
    fontFamily: FontFamily.body,
    marginHorizontal: 10
  },
  noteLabel: {
    fontFamily: FontFamily.body,
    fontSize: FontSize.small,
    color: Color.gray,
  }
});

export default DeleteAccountScreen;