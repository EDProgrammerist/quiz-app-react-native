// src/screens/HomeScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/ThemeContext';

const HomeScreen = ({ navigation }) => {
  const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <Text style={[styles.modeText, { color: theme.subText }]}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Text>
        <Switch 
          value={isDarkMode} 
          onValueChange={toggleTheme}
          trackColor={{ false: "#767577", true: theme.primary }}
        />
      </View>

      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.text }]}>Master the Code</Text>
        <Text style={[styles.subtitle, { color: theme.subText }]}>Test your knowledge or learn new languages!</Text>

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: theme.primary }]} 
          onPress={() => navigation.navigate('Category')} 
        >
          <Text style={[styles.buttonText, { color: theme.tint }]}>Start Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.learnButton]} 
          onPress={() => navigation.navigate('Learn')}
        >
          <Text style={styles.buttonText}>Learn Mode</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  modeText: { marginRight: 10, fontWeight: 'bold' },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: -50,
  },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 50, textAlign: 'center' },
  button: {
    width: '100%',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
  },
  learnButton: { backgroundColor: '#50e3c2' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default HomeScreen;