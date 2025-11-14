import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RestaurantScreen = ({ navigation, user }) => {
  const [activeTab, setActiveTab] = useState('order');
  const [orderData, setOrderData] = useState({ tableNo: '', dishName: '', quantity: '' });
  const [wasteData, setWasteData] = useState({ orderId: '', dishName: '', wasteQuantity: '', cost: '' });

  const createOrder = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/api/restaurant/orders',
        {
          tableNo: orderData.tableNo,
          dishes: [{ dishName: orderData.dishName, quantityServed: orderData.quantity }],
          userId: user.id
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      Alert.alert('Success', `Order created! ID: ${response.data.orderId}`);
      setOrderData({ tableNo: '', dishName: '', quantity: '' });
    } catch (error) {
      Alert.alert('Error', 'Failed to create order');
    }
  };

  const logWaste = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/restaurant/waste',
        {
          orderId: wasteData.orderId,
          dishName: wasteData.dishName,
          wasteQuantity: wasteData.wasteQuantity,
          estimatedCost: wasteData.cost,
          userId: user.id,
          mealType: 'lunch'
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      Alert.alert('Success', 'Waste logged successfully!');
      setWasteData({ orderId: '', dishName: '', wasteQuantity: '', cost: '' });
    } catch (error) {
      Alert.alert('Error', 'Failed to log waste');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backBtn}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>🍽️ Restaurant</Text>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'order' && styles.activeTab]}
          onPress={() => setActiveTab('order')}
        >
          <Text style={[styles.tabText, activeTab === 'order' && styles.activeTabText]}>
            New Order
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'waste' && styles.activeTab]}
          onPress={() => setActiveTab('waste')}
        >
          <Text style={[styles.tabText, activeTab === 'waste' && styles.activeTabText]}>
            Log Waste
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {activeTab === 'order' ? (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Create New Order</Text>
            <TextInput
              style={styles.input}
              placeholder="Table Number"
              value={orderData.tableNo}
              onChangeText={(text) => setOrderData({...orderData, tableNo: text})}
            />
            <TextInput
              style={styles.input}
              placeholder="Dish Name"
              value={orderData.dishName}
              onChangeText={(text) => setOrderData({...orderData, dishName: text})}
            />
            <TextInput
              style={styles.input}
              placeholder="Quantity (grams)"
              value={orderData.quantity}
              onChangeText={(text) => setOrderData({...orderData, quantity: text})}
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={createOrder}>
              <Text style={styles.buttonText}>Create Order</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Log Food Waste</Text>
            <TextInput
              style={styles.input}
              placeholder="Order ID"
              value={wasteData.orderId}
              onChangeText={(text) => setWasteData({...wasteData, orderId: text})}
            />
            <TextInput
              style={styles.input}
              placeholder="Dish Name"
              value={wasteData.dishName}
              onChangeText={(text) => setWasteData({...wasteData, dishName: text})}
            />
            <TextInput
              style={styles.input}
              placeholder="Waste Quantity (grams)"
              value={wasteData.wasteQuantity}
              onChangeText={(text) => setWasteData({...wasteData, wasteQuantity: text})}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Estimated Cost (₹)"
              value={wasteData.cost}
              onChangeText={(text) => setWasteData({...wasteData, cost: text})}
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={logWaste}>
              <Text style={styles.buttonText}>Log Waste</Text>
            </TouchableOpacity>
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
});

export default RestaurantScreen;
