import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
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
      <View style={styles.content}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>ដំណើរឆ្លងដែនរបស់ខ្ញុំ</Text>
          <Text style={styles.subtitle}>My Journeys</Text>
        </View>

        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome!</Text>
          <Text style={styles.welcomeText}>
            Your companion for safe and informed migration journeys
          </Text>
        </View>

        <View style={styles.featuresContainer}>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🗺️</Text>
            <Text style={styles.featureText}>Track Your Journey</Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureIcon}>📝</Text>
            <Text style={styles.featureText}>Manage Documents</Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureIcon}>ℹ️</Text>
            <Text style={styles.featureText}>Access Resources</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={handleGetStarted}
          activeOpacity={0.8}>
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  headerSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#ffffff',
    opacity: 0.95,
    textAlign: 'center',
  },
  welcomeSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 18,
    color: '#ffffff',
    opacity: 0.9,
    textAlign: 'center',
    lineHeight: 26,
  },
  featuresContainer: {
    marginVertical: 20,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  featureIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  featureText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '600',
    flex: 1,
  },
  getStartedButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  getStartedButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
  },
});

export default WelcomeScreen;
