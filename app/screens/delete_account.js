import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import {BottomSheetPicker} from 'react-native-bottom-sheet-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Snackbar } from 'react-native-paper';
import { withTranslation } from 'react-i18next';

import { Color } from '../assets/stylesheets/base_style';
import { FontFamily, FontSize } from '../assets/stylesheets/base_style';
import { Style } from '../assets/stylesheets/base_style';
import BigButtonComponent from '../components/shared/BigButtonComponent';
import BottomSheetModalComponent from '../components/shared/BottomSheetModalComponent';
import BottomSheetModalContentComponent from '../components/shared/BottomSheetModalContentComponent';
import DeleteReason from '../models/DeleteReason';
import UserService from '../services/user_service';

const DeleteAccountScreen = withTranslation()((props) => {
  const [userId, setUserId] = useState(null);
  const [selectedReason, setSelectedReason] = useState(null);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [isInvalidId, setIsInvalidId] = useState(false);
  const modalRef = React.createRef();
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

  const showUserIdInstruction = () => {
    modalRef.current?.setContent(
      <BottomSheetModalContentComponent
        title='កន្លែងដែលបង្ហាញ ID អ្នកប្រើប្រាស់'
      >
        <React.Fragment>
          <Text style={styles.userIdInfoLabel}>
            អ្នកអាចស្វែងរក ID របស់អ្នកប្រើប្រាស់នៅផ្ទាំងប្រវត្តិរូប:
          </Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.userIdInfoLabel}>1. ចូលទៅកាន់</Text>
            <FeatherIcon name="more-horizontal" size={24} style={{marginLeft: 8}} />
            <Text style={styles.userIdInfoLabel}>បន្ថែម</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.userIdInfoLabel}>2. ចូលទៅកាន់</Text>
            <Icon name="person-circle-outline" size={24} style={{marginLeft: 8}} />
            <Text style={styles.userIdInfoLabel}>បន្ថែម</Text>
          </View>

          <Text style={styles.userIdInfoLabel}>3. ថតចម្លង លេខសម្គាល់/ID</Text>
          <BigButtonComponent
            label="យល់ព្រម"
            buttonStyle={{marginTop: 16}}
            onPress={() => modalRef.current?.dismiss()}
          />
        </React.Fragment>
      </BottomSheetModalContentComponent>
    );
    modalRef.current?.present();
  }

  const tooltipButton = () => {
    return (
      <TouchableOpacity onPress={() => showUserIdInstruction()} style={{width: 48, justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="alert-circle-outline" size={24} color={Color.primary}/>
      </TouchableOpacity>
    )
  }

  const deletionForm = () => {
    return (
      <React.Fragment>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.label}>
            លេខសម្គាល់អ្នកប្រើប្រាស់ / User ID <Text style={{color: Color.red, fontSize: 18}}>*</Text>
          </Text>
          {tooltipButton()}
        </View>
        <View style={[styles.buttonWrapper, Style.boxShadow, {height: 64}, isInvalidId ? {borderWidth: 2, borderColor: Color.red} : {}]}>
          <TextInput
            placeholder='បញ្ចូលលេខសម្គាល់អ្នកប្រើប្រាស់របស់អ្នក'
            value={userId}
            style={styles.textInput}
            onChangeText={(value) => setUserId(value)}
          />
        </View>

        <Text style={[styles.label, { marginTop: 26 }]}>
          មូលហេតុសម្រាប់លុប / Reason for deletion <Text style={{color: Color.red, fontSize: 18}}>*</Text>
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
              deleteReasonId: selectedReason,
              onSuccess: () => {
                props.navigation.navigate('DeleteAccountSuccessScreen');
              },
              onFailure: (status) => {
                setIsInvalidId(true);
                setSnackbarVisible(true)
              }
            });
          }}
        />
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

        { deletionForm() }

        <Text style={[styles.noteLabel, {marginTop: 18}]}>
          *** គណនីរបស់អ្នកនឹងត្រូវបានកំណត់ពេលសម្រាប់លុប។ ទិន្នន័យនឹងត្រូវបានលុបចោលជាអចិន្ត្រៃយ៍បន្ទាប់ពី 30 ថ្ងៃ។
        </Text>
        <Text style={styles.noteLabel}>
          Your account will be scheduled for deletion. The data will be permanently removed after 30 days.
        </Text>

        <BottomSheetModalComponent ref={modalRef} />

        <Snackbar
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
          duration={3000}
          style={{backgroundColor: Color.red, width: '100%', marginLeft: 16}}
        >
          <Text style={{ fontSize: FontSize.small, fontFamily: FontFamily.body, color: Color.white }}>
            {props.t("DeleteAccount.UserIdIsIncorrect")}
          </Text>
        </Snackbar>
      </View>
    </TouchableWithoutFeedback>
  )
})

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
  },
  userIdInfoLabel: {
    fontSize: FontSize.body,
    fontFamily: FontFamily.body,
    marginVertical: 10,
    marginLeft: 4
  }
});

export default DeleteAccountScreen;