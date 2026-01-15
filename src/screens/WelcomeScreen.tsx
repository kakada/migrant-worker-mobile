import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen = ({navigation}: Props) => {
  const handleRegister = () => {
    navigation.navigate('Home');
  };

  const handleContinueAsGuest = () => {
    navigation.navigate('Home');
  };

  const handleVideoPress = () => {
    // Video functionality to be implemented
    console.log('Video pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topSection}>
          <View style={styles.headerSection}>
            <Text style={styles.title}>សូមស្វាគមន៍</Text>
            <Text style={styles.description}>
              តើអ្នកជឿជាក់បានសម្រេច ដឹងពីផលប៉ះពាល់វិជ្ជមាន (អវិជ្ជមាន){'\n'}
              ដែលកើតឡើងបន្ទាប់ពីការធ្វើចំណាក់ទេ?{'\n'}
              សូមជ្រើសរើសភាសារបស់អ្នកដើម្បីស្តាប់បន្ថែមទៀត។
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.button, styles.registerButton]}
              onPress={handleRegister}
              activeOpacity={0.8}>
              <View style={styles.buttonContent}>
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>👤</Text>
                </View>
                <Text style={styles.buttonText}>ចុះឈ្មោះ</Text>
              </View>
              <View style={styles.audioButton}>
                <Text style={styles.audioIcon}>🔊</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.guestButton]}
              onPress={handleContinueAsGuest}
              activeOpacity={0.8}>
              <View style={styles.buttonContent}>
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>❓</Text>
                </View>
                <Text style={styles.buttonText}>បន្តចូលមើល ជាភ្ញៀវ</Text>
              </View>
              <View style={styles.audioButton}>
                <Text style={styles.audioIcon}>🔊</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.logoSection}>
            <Text style={styles.logoTitle}>Spotlight Initiative</Text>
            <Text style={styles.logoSubtitle}>
              Eliminating violence{'\n'}against women and girls
            </Text>
            <View style={styles.partnerLogos}>
              <Text style={styles.partnerText}>🇪🇺  🇺🇳  🎯  ⚖️</Text>
            </View>
          </View>
        </View>

        <View style={styles.illustrationSection}>
          <ImageBackground
            source={require('../assets/images/icons/welcome_bg.png')}
            style={styles.illustrationImage}
            resizeMode="contain">
            <TouchableOpacity
              style={styles.playButton}
              onPress={handleVideoPress}
              activeOpacity={0.8}>
              <Text style={styles.playIcon}>▶️</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
  },
  topSection: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 8,
  },
  buttonsContainer: {
    marginVertical: 14,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  registerButton: {
    backgroundColor: '#17A2B8',
  },
  guestButton: {
    backgroundColor: '#E91E63',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 22,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    flex: 1,
  },
  audioButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  audioIcon: {
    fontSize: 22,
  },
  logoSection: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  logoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  logoSubtitle: {
    fontSize: 11,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 16,
    marginBottom: 8,
  },
  partnerLogos: {
    marginTop: 8,
  },
  partnerText: {
    fontSize: 18,
  },
  illustrationSection: {
    marginTop: 16,
    alignItems: 'center',
  },
  illustrationImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 1.0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#E91E63',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  playIcon: {
    fontSize: 28,
    color: '#FFFFFF',
    marginLeft: 4,
  },
});

export default WelcomeScreen;
