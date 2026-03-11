import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Ticker} from 'react-native-ticker-tape';

import { Color, FontFamily, FontSize } from '../../assets/stylesheets/base_style';

class MiniSoundPlayer extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    containerWidth: 0,
    isEllipsis: false
  };

  titleText() {
    return (
      <Text
        numberOfLines={1}
        onTextLayout={(e) => {
          const { lines } = e.nativeEvent;
          this.setState({
            isEllipsis: this.state.containerWidth < lines[0].width
          });
        }}
        style={{fontFamily: FontFamily.title, fontSize: FontSize.small, paddingHorizontal: 14, alignSelf: 'center', width: '100%'}}
      >
        {this.props.title}
      </Text>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.openModal()} style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <ImageBackground
            source={this.props.image}
            style={{width: 70, height: 50}}
            resizeMode='contain'
          />

          <View style={{flex: 1}}
            onLayout={(e) => {
              this.setState({
                containerWidth: e.nativeEvent.layout.width
              });
            }}
          >
            { this.state.isEllipsis
              ? <Ticker msPerPX={50} loop={true}>
                  {this.titleText()}
                </Ticker>
              : this.titleText()
            }
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.playAudio()}>
          <Icon name={!!this.props.countInterval ? 'pause' : 'play'} size={20} style={[{paddingHorizontal: 10, color: 'black'}, !this.props.audio && { color: Color.lightGray }]} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});

export default MiniSoundPlayer;