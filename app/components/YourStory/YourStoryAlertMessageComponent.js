import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import {useDispatch} from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {setCurrentPlayingAudio} from '../../actions/currentPlayingAudioAction';
import { Color, FontFamily, FontSize } from '../../assets/stylesheets/base_style';
import OutlineInfoIcon from '../OutlineInfoIcon';
import BigButtonComponent from '../shared/BigButtonComponent';
import CustomAudioPlayerComponent from '../shared/CustomAudioPlayerComponent';
import AppIcon from '../AppIcon';

const YourStoryAlertMessageComponent = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    return () => {
      dispatch(setCurrentPlayingAudio(null));
    };
  }, [dispatch]);

  const renderIcon = () => {
    return props.warning
      ? <AppIcon iconType='warning' customStyles={{width: 96, height: 96}} />
      : <OutlineInfoIcon
          customIconContainerStyles={{width: 96, height: 96, borderRadius: 96, marginRight: 0}}
          customIconStyles={{width: 64, height: 64}}
        />;
  }

  const renderAudioPlayer = () => {
    return <View style={{position: 'absolute', zIndex: 10, right: 16}}>
      <CustomAudioPlayerComponent
        itemUuid='alert-dialog'
        audio={props.audio}
        buttonBackgroundColor={Color.red}
        isOutline={true}
      />
    </View>
  }

  const onPressAction = () => {
    dispatch(setCurrentPlayingAudio(null));
    props.onPress();
  }

  return (
    <View style={{alignItems: 'center', paddingTop: 16, paddingBottom: insets.bottom + 12}}>
      { renderIcon() }
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 16, position: 'relative'}}>
        <View style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontFamily: FontFamily.title, fontSize: FontSize.body, marginRight: 16, marginTop: 6}}>
            { props.title || 'សូមចំណាំ' }
          </Text>
        </View>
        {renderAudioPlayer()}
      </View>
      <Text style={{fontFamily: FontFamily.body, marginTop: 16, marginBottom: 32, paddingHorizontal: 16}}>
        { props.message }
      </Text>

      <View style={{width: '100%', paddingHorizontal: 16}}>
        <BigButtonComponent
          label="បាទ/ចាស"
          onPress={() => onPressAction()}
        />
      </View>
    </View>
  );

})

export default YourStoryAlertMessageComponent;