import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({ navigation, user, onLogout }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🌱 Food Waste Tracker</Text>
        <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcome}>Welcome, {user.name}!</Text>
        <Text style={styles.subtitle}>Choose Your Module</Text>

        <TouchableOpacity 
          style={styles.moduleCard}
          onPress={() => navigation.navigate('Restaurant')}
        >
          <Text style={styles.moduleIcon}>🍽️</Text>
          <Text style={styles.moduleTitle}>Restaurant / Hotel</Text>
          <Text style={styles.moduleDesc}>
            Track order-based food waste and get AI recommendations
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.moduleCard}
          onPress={() => navigation.navigate('Hostel')}
        >
          <Text style={styles.moduleIcon}>🏠</Text>
          <Text style={styles.moduleTitle}>Hostel / Mess</Text>
          <Text style={styles.moduleDesc}>
            Log daily quantities and predict requirements
          </Text>
        </TouchableOpacity>

        <View style={styles.infoSection}>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>📊 Analytics</Text>
            <Text style={styles.infoText}>View waste trends</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>🤖 AI Predictions</Text>
            <Text style={styles.infoText}>Smart forecasts</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Team: DreamStack</Text>
          <Text style={styles.footerText}>Leader: Rajadurai R</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
  },
  header: {
    backgroundColor: '#fff',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#10b981',
  },
  logoutBtn: {
    backgroundColor: '#6b7280',
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    fontWeight: '600',
  },
  content: {
    padding: 20,
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 24,
  },
  moduleCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    elevation: 3,
  },
  moduleIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  moduleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  moduleDesc: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  infoSection: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#10b981',
    padding: 16,
    borderRadius: 12,
  },
  infoTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  infoText: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.9,
  },
  footer: {
    marginTop: 32,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    alignItems: 'center',
  },
  footerText: {
    color: '#6b7280',
    fontSize: 12,
    marginBottom: 4,
  },
});

export default HomeScreen;
