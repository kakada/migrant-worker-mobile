import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ToastAndroid,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Icon } from 'react-native-material-ui';
import { Color, Style, FontFamily, FontSize } from '../assets/stylesheets/base_style';
import ButtonNav from '../components/button_nav';
import NetInfo from "@react-native-community/netinfo";
import Images from '../utils/images';
import LinearGradient from 'react-native-linear-gradient';

import { getVideoId } from '../utils/youtube';
import i18n from 'i18next';
import { withTranslation } from 'react-i18next';

import User from '../models/User';
import uuidv4 from '../utils/uuidv4';

import { connect } from 'react-redux';
import { setCurrentUser } from '../actions/currentUserAction';

class Welcome extends React.Component {
  state = {};

  _loginAsGuest() {
    this._clearAudioPlayer();

    let uuid = uuidv4();
    User.upsert({uuid: uuid, name: "Guest", created_at: new Date()});
    User.uploadAsync(uuid);

    this.props.setCurrentUser(User.find(uuid));
  }

  _register() {
    this._clearAudioPlayer();
    this.props.navigation.navigate("RegisterScreen", {action: 'register'})
  }

  _clearAudioPlayer() {
    if (this.state.audioPlayer) {
      this.state.audioPlayer.release();
      this.setState({ audioPlayer: null });
    }
  }

  _renderButtonNavs() {
    return (
      <View style={[Style.container, {marginTop: 0}]}>
        <ButtonNav
          active={true}
          title={"ចុះឈ្មោះ"}
          icon={"person"}
          audio={'register.mp3'}
          audioPlayer={this.state.audioPlayer}
          updateAudioPlayer={(sound) => this.setState({ audioPlayer: sound })}
          onPress={() => this._register()}
        />

        <ButtonNav
          title={"បន្តចូលមើល ជាភ្ញៀវ"}
          image={"head_profile"}
          iconSet={'MaterialCommunityIcons'}
          audio={""}
          audioPlayer={this.state.audioPlayer}
          updateAudioPlayer={(sound) => this.setState({ audioPlayer: sound })}
          onPress={() => this._loginAsGuest()}
        />
      </View>
    )
  }

  _onPressItem(video) {
    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        return ToastAndroid.show("សូមភ្ជាប់បណ្តាញអ៊ិនធឺណេតជាមុនសិន!", ToastAndroid.SHORT);
      }

      this.props.navigation.navigate('ViewVideoScreen', { videoId: getVideoId("https://www.youtube.com/watch?v=ttSsAGmpC_U") });
    });
  }

  _renderContent() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={Images.welcome_bg}
          style={{ width: '100%', height: '100%', resizeMode: "cover" }} >

          <LinearGradient colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.01)',  '#fff']} style={{flex: 1}}>
            <View style={{flex: 1, paddingHorizontal: 16}}>
              <Image source={Images.spotlight_one_line} style={{width: "100%", height: 100, resizeMode: 'cover'}}/>
            </View>

            { this._renderVideoButton() }

            <Text style={{fontFamily: FontFamily.title, fontSize: FontSize.title, textAlign: 'center'}}>សូមស្វាគមន៍</Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    )
  }

  _renderVideoButton() {
    return (
      <View style={{width: '100%', height: '100%', position: 'absolute', alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{backgroundColor: '#fff', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => this._onPressItem()}>

          <View style={{
            backgroundColor: Color.primary,
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Icon name='play-arrow' size={30} color={Color.white} iconSet='MaterialIcons' />
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, backgroundColor: '#fff' }}>
        { this._renderContent() }

        <Text style={{padding: 16, textAlign: 'center'}}>
          ដំណើរឆ្លងដែនរបស់ខ្ញុំគឺជាកម្មវិធីប្រពន្ធ័ទូរស័ព្ទ (អែប) ដើម្បីជួយដល់អ្នកប្រើប្រាស់អាចរកបាននូវព័ត៌មានដែលមានសារៈ​សំខាន់សម្រាប់ការធ្វើចំណាកស្រុក
        </Text>

        { this._renderButtonNavs() }
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(Welcome));
