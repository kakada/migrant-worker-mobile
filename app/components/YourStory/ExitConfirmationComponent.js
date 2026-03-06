import React from 'react';
import { View, Text } from 'react-native';
import {useDispatch} from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {setCurrentPlayingAudio} from '../../actions/currentPlayingAudioAction';
import { Color, FontFamily, FontSize } from '../../assets/stylesheets/base_style';
import OutlineInfoIcon from '../OutlineInfoIcon';
import BigButtonComponent from '../shared/BigButtonComponent';
import CustomAudioPlayerComponent from '../shared/CustomAudioPlayerComponent';

const ExitConfirmationComponent = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  const exitYourStory = () => {
    props.modalRef.current?.dismiss();
    dispatch(setCurrentPlayingAudio(null));
    props.exitScreen();
  }

  const renderAudioPlayer = () => {
    return <View style={{position: 'absolute', zIndex: 1, right: 16}}>
      <CustomAudioPlayerComponent
        itemUuid='alert-dialog'
        audio='exit_game.mp3'
        buttonBackgroundColor={Color.red}
        isOutline={true}
      />
    </View>
  }

  return (
    <View style={{alignItems: 'center', paddingTop: 16, paddingBottom: insets.bottom + 12}}>
      <OutlineInfoIcon
        customIconContainerStyles={{width: 96, height: 96, borderRadius: 96, marginRight: 0}}
        customIconStyles={{width: 64, height: 64}}
      />
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 16, position: 'relative'}}>
        <View style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontFamily: FontFamily.title, fontSize: FontSize.body, marginRight: 16, marginTop: 6}}>ចាកចេញពីសាច់រឿង</Text>
        </View>
        {renderAudioPlayer()}
      </View>
      <Text style={{fontFamily: FontFamily.body, marginTop: 16, marginBottom: 32}}>តើអ្នកប្រាកដថាចង់ចាកចេញពីហ្គេមនេះដែរឬទេ?</Text>

      <View style={{width: '100%', paddingHorizontal: 16}}>
        <BigButtonComponent
          label="បាទ/ចាស"
          onPress={() => exitYourStory()}
        />
      </View>
    </View>
  );
})

export default ExitConfirmationComponent;