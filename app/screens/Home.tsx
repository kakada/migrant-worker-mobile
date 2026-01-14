import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Color, FontFamily, FontSize } from '../assets/stylesheets/base_style';
import Style from '../assets/stylesheets/base/style';

interface HomeProps {
  navigation?: any;
}

export default class Home extends React.Component<HomeProps> {
  _renderHeader() {
    return (
      <View style={styles.imageWrapper}>
        <Image
          style={styles.travelImage}
          source={require('../assets/images/icons/travel.png')}
        />
      </View>
    );
  }

  _renderButtonAbout() {
    return (
      <View style={styles.aboutButtonContainer}>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.buttonAboutWrapper}>
          <Icon name="info" size={24} />
          <Text style={styles.aboutText}>អំពីកម្មវិធី</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {this._renderHeader()}

        <View style={Style.container}>
          <Text style={styles.title}>ចំណាកស្រុកសុវត្ថិភាព</Text>
          <Text>កម្មវិធីចំណាកស្រុកសុវត្ថិភាព</Text>
          <Text>ជាកម្មវិធីទូរស័ព្ទបង្កើតឡើងក្នុងគោលបំណងជំនួយ</Text>
        </View>

        {this._renderButtonAbout()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  imageWrapper: {
    height: 196,
    backgroundColor: Color.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  travelImage: {
    width: 301,
    height: 198,
  },
  title: {
    fontFamily: FontFamily.title,
    fontSize: FontSize.title,
    textAlign: 'center',
  },
  aboutButtonContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  buttonAboutWrapper: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'center',
  },
  aboutText: {
    marginLeft: 10,
  },
});
