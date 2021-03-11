import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground
} from 'react-native';
import { Icon, Toolbar } from 'react-native-material-ui';
import { Color, FontFamily, FontSize, Style } from '../../assets/stylesheets/base_style';
import PlaySound from '../../components/play_sound';
import Images from '../../utils/images';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';


class ComingHome extends Component {
  state = {}

  _renderToolbar() {
    return (
      <Toolbar
        leftElement={'arrow-back'}
        onLeftElementPress={() => this.props.navigation.goBack()}
        centerElement={this.props.t('ComingHomeScreen.HeaderTitle')}
        rightElement={'home'}
        onRightElementPress={() => this._goTo('HomeScreen')}
        size={30}
        style={{
          titleText: {
            fontFamily: FontFamily.title,
            textAlign: 'center',
          },
          centerElementContainer: {
            marginLeft: 0
          },
          container: {
            width: '100%',
            backgroundColor: Color.red,
          },
        }}
      />
    );
  }

  _onPress(item) {
    if (item.routeName == 'ImageViewScreen') {
      addStatistic('migration_checklist_view_image', { title: item.title })
    }

    // this.props.navigation.navigate(item.screenName, { title: item[`title_${i18n.language}`], imageList: item.imageList });
  }

  _renderContent() {
    let list = [
      {
        title_en: 'Making your plan',
        title_kh: 'ធ្វើផែនការរបស់អ្នក',
        image: Images.coming_home_women_migrant_worker,
        screenName: 'ImageViewScreen',
        imageList: 'visas',
        fileName: '',
        w: 34,
        h: 45
      },
      {
        title_en: 'Reintegration at home',
        title_kh: 'ការបង្រួបបង្រួមនៅផ្ទះ',
        image: Images.coming_home_women_migrant_worker,
        screenName: 'ImageViewScreen',
        imageList: 'worker_cards',
        fileName: '',
        w: 34,
        h: 45
      },
      {
        title_en: 'Women migrant workers and the economy',
        title_kh: 'ពលករចំណាកស្រុកនិងសេដ្ឋកិច្ច',
        image: Images.coming_home_women_migrant_worker,
        screenName: 'ImageViewScreen',
        imageList: 'passport',
        fileName: '',
        w: 34,
        h: 45
      },
    ];

    return list.map((item, index) => this._renderCard(item, index));
  }

  _renderCard(item, index) {
    return (
      <TouchableOpacity
        key={index}
        style={[Style.card, { padding: 0 }]}
        onPress={() => this._onPress(item)}
        activeOpacity={0.8}
      >
        <ImageBackground
          source={item.image}
          style={{ flex: 1 }}>
          <View style={[Style.cardContent,
          {
            marginBottom: 0,
            paddingBottom: 0,
            minHeight: 160
          }
          ]}>

            <View style={{ flex: 1, padding: 14, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <View style={styles.cardID}>
                  <Text style={styles.cardNumber}>{index + 1}</Text>
                </View>
              </View>

              <View>
                <PlaySound
                  fileName={'register'}
                  buttonAudioStyle={{
                    backgroundColor: Color.red
                  }}
                  iconStyle={{
                    tintColor: Color.white
                  }}
                  activePlaying={this.state.activePlaying}
                  onPress={(fileName) => this.setState({ activePlaying: fileName })}
                />
              </View>
            </View>
          </View>
        </ImageBackground>

        <View style={{ flexDirection: 'row', padding: 14 }}>
          <Text style={[styles.title]}>{item[`title_${i18n.language}`]}</Text>
          <Icon name='keyboard-arrow-right' size={24} />
        </View>
      </TouchableOpacity>
    )
  }

  _renderMainCard() {
    return (
      <View style={[Style.card, { maxHeight: 150, padding: 0, backgroundColor: Color.red }]}>
        <ImageBackground
          source={Images.three_things_to_prepare}
          style={{ width: '100%', height: '100%', resizeMode: "cover", }}>

          <View style={[Style.cardContent, styles.mainCardContent]}>
            <View style={{ marginRight: 10, paddingHorizontal: 10, justifyContent: "center" }}>
              <Text style={styles.mainCardNumber}>{3}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={styles.mainCardLabel}>{this.props.t('ComingHomeScreen.Descriptions')}</Text>
            </View>
            <View style={{ marginLeft: 20 }}>
              <PlaySound
                fileName={'register'}
                buttonAudioStyle={{
                  backgroundColor: Color.red
                }}
                iconStyle={{
                  tintColor: Color.white
                }}
                activePlaying={this.state.activePlaying}
                onPress={(fileName) => this.setState({ activePlaying: fileName })}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }

  _renderArrowDown() {
    return (
      <View style={styles.arrowDown}>
        <Image source={Images.down} style={styles.arrowDownImage} />
      </View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this._renderToolbar()}
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}>
          <View style={[Style.container, { flex: 1, marginBottom: 0 }]}>
            {this._renderMainCard()}
            {this._renderArrowDown()}
            {this._renderContent()}
          </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  cardID: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fcd4ce",
    overflow: 'hidden',
  },
  cardNumber: {
    fontWeight: '700',
    fontSize: FontSize.title + 15,
    color: Color.red,
    marginBottom: 5
  },
  title: {
    flex: 1,
    fontFamily: FontFamily.title,
    color: Color.textBlack,
    fontWeight: '700'
  },
  mainCardContent: {
    flex: 1,
    padding: 14,
    borderBottomWidth: 0,
    marginBottom: 0,
  },
  mainCardNumber: {
    fontWeight: '700',
    fontSize: FontSize.title + 30,
    lineHeight: FontSize.title + 30,
    color: Color.white,
  },
  mainCardLabel: {
    fontSize: FontSize.title - 7,
    fontWeight: '700',
    color: Color.white,
  },
  arrowDown: {
    flex: 1,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  arrowDownImage: {
    width: 30,
    height: 30,
    tintColor: Color.gray
  }
});

export default withTranslation()(ComingHome);