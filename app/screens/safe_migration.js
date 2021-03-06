import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

import { Icon } from 'react-native-material-ui';
import { Color, FontFamily, FontSize, Style } from '../assets/stylesheets/base_style';
import PlaySound from '../components/play_sound';
import Images from '../utils/images';
import uuidv4 from '../utils/uuidv4';
import { addStatistic } from '../utils/statistic';
import CollapsibleNavbar from '../components/collapsible_navbar';

export default class SafeMigration extends React.Component {
  state = {}

  _onPress(item) {
    if (item.routeName == 'ImageViewScreen' ) {
      addStatistic('migration_checklist_view_image', { title: item.title })
    }

    this.props.navigation.navigate(item.screenName, {title: item.title, imageList: item.imageList});
  }

  _renderCard(item) {
    return (
      <TouchableOpacity
        key={ uuidv4() }
        style={Style.card}
        onPress={() => this._onPress(item)}
        >
        <View style={Style.cardContent}>
          <View style={Style.avata}>
            {!!item.image && <Image source={Images[item.image]} style={{width: item.w, height: item.h}} /> }
          </View>

          <View style={{flex: 1, marginLeft: 16, marginRight: 16, justifyContent: 'center'}}>
            <Text>{item.title}</Text>
          </View>

          <PlaySound
            style={{paddingLeft: 10}}
            fileName={item.fileName || 'register'}
            activePlaying={this.state.activePlaying}
            onPress={(fileName) => this.setState({activePlaying: fileName})}/>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1, fontFamily: FontFamily.title, color: Color.primary}}>ចូលមើល</Text>
          <Icon name='keyboard-arrow-right' size={24} />
        </View>
      </TouchableOpacity>
    );
  }

  _renderCardList() {
    let list = [
      { title: 'កាតពលករកម្ពុជាធ្វើការក្រៅប្រទេស', image: '', screenName: 'ImageViewScreen', imageList: 'worker_cards', fileName: '', w: 34, h: 45 },
      { title: 'លិខិតឆ្លងដែន', image: 'passport', screenName: 'ImageViewScreen', imageList: 'passports', fileName: '', w: 34, h: 45 },
      { title: 'ទិដ្ឋាការការងារ', image: '', screenName: 'ImageViewScreen', imageList: 'visas', fileName: '', w: 34, h: 45 },
      { title: 'កិច្ចសន្យារការងារ', image: '', screenName: 'ImageViewScreen', imageList: '', fileName: '', w: 34, h: 45 },
      { title: 'កិច្ចសន្យាររកការងារឱ្យធ្វើ', image: '', screenName: 'ImageViewScreen', imageList: '', fileName: '', w: 34, h: 45 },
      { title: 'លិខិតអនុញ្ញាតឱ្យស្នាក់នៅក្នុងប្រទេសទទួល', image: '', screenName: 'ImageViewScreen', imageList: '', fileName: '', w: 34, h: 45 },
      { title: 'ឯកសារផ្សេងៗ', image: 'other_doc', screenName: 'OtherDocScreen', fileName: '', w: 34, h: 41 },
    ]

    return list.map(l => this._renderCard(l));
  }

  _renderCheckListCard() {
    return (
      <View style={Style.card}>
        <View style={[Style.cardContent, {borderBottomWidth: 0}]}>
          <Icon name='info' size={24} />

          <View style={{flex: 1, marginLeft: 16, justifyContent: 'center'}}>
            <Text style={{fontFamily: FontFamily.title, color: Color.primary}}>បញ្ជីត្រួតពិនិត្យមុនចេញដំណើរ</Text>
          </View>

          <PlaySound
            style={{paddingLeft: 10}}
            fileName={'register'}
            activePlaying={this.state.activePlaying}
            onPress={(fileName) => this.setState({activePlaying: fileName})}/>
        </View>

        <Text>សូមពិនិត្យមើលឯកសារដែលអ្នក ឬភ្នាក់ងារនាំពលករធ្វើការនៅក្រៅប្រទេសបានបំពេញ</Text>
      </View>
    );
  }

  _renderContent() {
    return(
      <View>
        { this._renderCheckListCard() }
        <Text>ឯកសារដែលអ្នកត្រូវមានដូចជា៖</Text>
        { this._renderCardList() }
      </View>
    )
  }

  render() {
    return (
      <CollapsibleNavbar
        options={{
          title: 'ចំណាកស្រុកសុវត្ថិភាព ត្រូវមានអ្វីខ្លះ?',
          bodyContent: this._renderContent()
        }}
      />
    )
  }
}
