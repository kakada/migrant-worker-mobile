import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
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
  const handleGetStarted = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
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
              style={[styles.button, styles.buttonCyan]}
              onPress={handleGetStarted}
              activeOpacity={0.8}>
              <View style={styles.buttonContent}>
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>👤</Text>
                </View>
                <Text style={styles.buttonText}>ចុះឈ្មោះ</Text>
              </View>
              <View style={styles.soundIcon}>
                <Text style={styles.soundIconText}>🔊</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.buttonPink]}
              onPress={handleGetStarted}
              activeOpacity={0.8}>
              <View style={styles.buttonContent}>
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>❓</Text>
                </View>
                <Text style={styles.buttonText}>បន្តប្រើប្រាស់ ដោយគ្មាន</Text>
              </View>
              <View style={styles.soundIcon}>
                <Text style={styles.soundIconText}>🔊</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.logoSection}>
            <Text style={styles.logoText}>Spotlight Initiative</Text>
            <Text style={styles.logoSubtext}>
              Eliminating violence{'\n'}
              against women and girls
            </Text>
            <View style={styles.partnerLogos}>
              <Text style={styles.partnerLogoText}>🇪🇺  🇺🇳  🎯  ⚖️</Text>
            </View>
          </View>

          <View style={styles.illustrationSection}>
            <View style={styles.illustrationContainer}>
              <Text style={styles.illustrationEmoji}>👩‍🦱🏠🌴</Text>
              <TouchableOpacity style={styles.playButton}>
                <Text style={styles.playButtonText}>▶️</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'space-between',
  },
  headerSection: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    marginVertical: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonCyan: {
    backgroundColor: '#17A2B8',
  },
  buttonPink: {
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
    marginRight: 15,
  },
  iconText: {
    fontSize: 24,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    flex: 1,
  },
  soundIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  soundIconText: {
    fontSize: 24,
  },
  logoSection: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  logoSubtext: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 10,
  },
  partnerLogos: {
    marginTop: 10,
  },
  partnerLogoText: {
    fontSize: 20,
  },
  illustrationSection: {
    marginTop: 20,
    alignItems: 'center',
  },
  illustrationContainer: {
    width: '100%',
    height: 250,
    backgroundColor: '#4DB8C4',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  illustrationEmoji: {
    fontSize: 48,
    marginBottom: 20,
  },
  playButton: {
    position: 'absolute',
    bottom: 80,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E91E63',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  playButtonText: {
    fontSize: 28,
    color: '#FFFFFF',
  },
});

export default WelcomeScreen;
