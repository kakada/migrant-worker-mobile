import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>ដំណើរឆ្លងដែនរបស់ខ្ញុំ</Text>
          <Text style={styles.subtitle}>My Journeys</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.welcomeText}>Welcome to My Journeys!</Text>
          <Text style={styles.description}>
            This app helps migrant workers track and manage their journey.
          </Text>
        </View>

        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Features</Text>
          
          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureTitle}>🗺️ Track Your Journey</Text>
            <Text style={styles.featureDescription}>
              Keep track of your travels and important locations
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureTitle}>📝 Document Management</Text>
            <Text style={styles.featureDescription}>
              Store and manage your important documents
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureTitle}>ℹ️ Information & Resources</Text>
            <Text style={styles.featureDescription}>
              Access important information and resources
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#ffffff',
    opacity: 0.9,
  },
  content: {
    padding: 20,
    backgroundColor: '#ffffff',
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  featuresSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  featureCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2196F3',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default HomeScreen;
