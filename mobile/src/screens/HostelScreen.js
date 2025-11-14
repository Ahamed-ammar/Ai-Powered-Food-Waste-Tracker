import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HostelScreen = ({ navigation, user }) => {
  const [activeTab, setActiveTab] = useState('input');
  const [logData, setLogData] = useState({
    date: new Date().toISOString().split('T')[0],
    mealType: 'lunch',
    cooked: '',
    served: '',
    wasted: '',
    attendance: ''
  });
  const [prediction, setPrediction] = useState(null);

  const saveLog = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/hostel/logs',
        { ...logData, userId: user.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      Alert.alert('Success', 'Daily log saved!');
      setLogData({
        date: new Date().toISOString().split('T')[0],
        mealType: 'lunch',
        cooked: '',
        served: '',
        wasted: '',
        attendance: ''
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to save log');
    }
  };

  const getPrediction = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
      const response = await axios.post(
        'http://localhost:5000/api/predictions/hostel/predict',
        { date: tomorrow, mealType: 'lunch', userId: user.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setPrediction(response.data);
    } catch (error) {
      Alert.alert('Error', 'Failed to generate prediction');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backBtn}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>🏠 Hostel / Mess</Text>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'input' && styles.activeTab]}
          onPress={() => setActiveTab('input')}
        >
          <Text style={[styles.tabText, activeTab === 'input' && styles.activeTabText]}>
            Daily Input
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'predict' && styles.activeTab]}
          onPress={() => setActiveTab('predict')}
        >
          <Text style={[styles.tabText, activeTab === 'predict' && styles.activeTabText]}>
            AI Predict
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {activeTab === 'input' ? (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Daily Food Log</Text>
            <TextInput
              style={styles.input}
              placeholder="Food Cooked (kg)"
              value={logData.cooked}
              onChangeText={(text) => setLogData({...logData, cooked: text})}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Food Served (kg)"
              value={logData.served}
              onChangeText={(text) => setLogData({...logData, served: text})}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Food Wasted (kg)"
              value={logData.wasted}
              onChangeText={(text) => setLogData({...logData, wasted: text})}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Student Attendance"
              value={logData.attendance}
              onChangeText={(text) => setLogData({...logData, attendance: text})}
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={saveLog}>
              <Text style={styles.buttonText}>Save Log</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>AI Prediction</Text>
              <TouchableOpacity style={styles.button} onPress={getPrediction}>
                <Text style={styles.buttonText}>🤖 Generate Prediction</Text>
              </TouchableOpacity>
            </View>

            {prediction && (
              <View style={styles.card}>
                <Text style={styles.resultTitle}>Predicted Quantity</Text>
                <Text style={styles.resultValue}>{prediction.predictedQuantity} kg</Text>
                <Text style={styles.resultDetail}>Avg Waste: {prediction.avgWasted} kg</Text>
                <Text style={styles.resultDetail}>Waste %: {prediction.wastePercentage}%</Text>
                {prediction.recommendations && prediction.recommendations.map((rec, i) => (
                  <View key={i} style={styles.recommendation}>
                    <Text style={styles.recText}>{rec}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </View>
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
    alignItems: 'center',
    elevation: 2,
  },
  backBtn: {
    fontSize: 16,
    color: '#10b981',
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  tab: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#10b981',
  },
  tabText: {
    fontSize: 16,
    color: '#6b7280',
  },
  activeTabText: {
    color: '#10b981',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1f2937',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#10b981',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resultTitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 8,
  },
  resultValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#10b981',
    marginBottom: 16,
  },
  resultDetail: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  recommendation: {
    backgroundColor: '#fef3c7',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  recText: {
    color: '#92400e',
    fontSize: 14,
  },
});

export default HostelScreen;
