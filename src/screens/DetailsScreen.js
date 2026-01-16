// src/screens/DetailsScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { ThemeContext } from '../context/ThemeContext'; // 1. Import Context

const DetailsScreen = ({ route }) => {
  const { language } = route.params;
  const { theme } = useContext(ThemeContext); // 2. Get Theme
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image source={{ uri: language.logo }} style={styles.headerLogo} resizeMode="contain" />
        <Text style={[styles.hintText, { color: theme.subText }]}>Tap image to expand</Text>
      </TouchableOpacity>

      <View style={styles.detailsContainer}>
        <Text style={[styles.title, { color: theme.text }]}>{language.name}</Text>
        
        {/* reusable Item to keep code clean */}
        <DetailItem label="Extension" value={language.extension} theme={theme} />
        <DetailItem label="Primary Use Case" value={language.useCase} theme={theme} />
        <DetailItem label="Paradigm" value={language.paradigm} theme={theme} />

        <View style={styles.section}>
          <Text style={[styles.label, { color: theme.primary }]}>Description:</Text>
          <Text style={[styles.description, { color: theme.text }]}>{language.description}</Text>
        </View>
      </View>

      {/* Full Screen Image Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity 
            style={[styles.closeButton, { backgroundColor: theme.cardBg }]} 
            onPress={() => setModalVisible(false)}
          >
             <Text style={[styles.closeText, { color: theme.text }]}>Close</Text>
          </TouchableOpacity>
          <Image source={{ uri: language.logo }} style={styles.fullScreenImage} resizeMode="contain" />
        </View>
      </Modal>
    </ScrollView>
  );
};

// Helper component for list items
const DetailItem = ({ label, value, theme }) => (
  <View style={styles.section}>
    <Text style={[styles.label, { color: theme.primary }]}>{label}:</Text>
    <Text style={[styles.value, { color: theme.text }]}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerLogo: {
    width: '100%',
    height: 200,
    marginTop: 20,
  },
  hintText: {
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)', // Keep background dark for focus
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenImage: {
    width: '90%',
    height: '70%',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    zIndex: 1,
  },
  closeText: {
    fontWeight: 'bold',
  }
});

export default DetailsScreen;