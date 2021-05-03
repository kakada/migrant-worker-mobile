import React, { Component } from 'react';

import { View, StyleSheet } from 'react-native';
import { Color, FontFamily, Style } from '../assets/stylesheets/base_style';
import { InjectArray } from '../utils/math';
import { addStatistic } from '../utils/statistic';
import { withTranslation } from 'react-i18next';

import uuidv4 from '../utils/uuidv4';
import CardItem from '../components/Home/CardItem';
import homeMenuList from '../db/json/home_menu';

class Home extends Component {
  state = {};

  _goTo(screenName) {
    addStatistic(`goTo${screenName.split('Screen')[0]}`);
    this.props.navigation.navigate(screenName);
  }

  _renderCardItem(item) {
    return (
      <CardItem
        key={uuidv4()}
        item={item}
        onPress={() => this._goTo(item.screenName)}
      />
    )
  }

  _renderCards() {
    let row1 = homeMenuList.slice(0, 2).map((item) => this._renderCardItem(item));
    let row2 = homeMenuList.slice(2, 4).map((item) => this._renderCardItem(item));
    let space = <View key={uuidv4()} style={{ width: 16 }}></View>;

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.rowStyle}>
          { InjectArray(row1, space) }
        </View>

        <View style={{ height: 16 }}></View>

        <View style={styles.rowStyle}>
          { InjectArray(row2, space) }
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={[Style.container, { flex: 1 }]}>
        { this._renderCards()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    flex: 1
  }
});

export default withTranslation()(Home);
