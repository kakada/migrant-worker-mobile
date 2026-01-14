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
import ButtonNav from '../components/ButtonNav';

interface HomeProps {
  navigation?: any;
}

export default class Home extends React.Component<HomeProps> {
  _goTo(screenName: string) {
    if (this.props.navigation) {
      this.props.navigation.navigate(screenName);
    }
  }

  _renderButtonNavs() {
    const list = [
      {
        title: 'ចុះឈ្មោះ(រក្សាការសម្ងាត់)',
        iconName: 'person',
        routeName: 'RegisterScreen',
        active: true,
      },
      {
        title: 'ទាក់ទងទៅលេខជំនួយ១២៨០',
        iconName: 'phone',
        routeName: 'Contact1280Screen',
        active: false,
      },
      {
        title: 'ចំណាកស្រុកសុវត្ថិភាព',
        iconName: 'info-outline',
        routeName: 'OtherInfoScreen',
        active: false,
      },
    ];

    const doms = list.map((item, index) => (
      <ButtonNav
        key={index}
        active={item.active}
        title={item.title}
        icon={item.iconName}
        onPress={() => this._goTo(item.routeName)}
      />
    ));

    return <View style={styles.buttonNavContainer}>{doms}</View>;
  }
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
          onPress={() => this._goTo('AboutScreen')}
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
          {this._renderButtonNavs()}
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
  buttonNavContainer: {
    marginTop: 30,
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
