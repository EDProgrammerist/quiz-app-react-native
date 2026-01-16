// src/screens/CategoryScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const categories = [
  { id: 'Backend', name: 'Backend', icon: '🗄️' },
  { id: 'Frontend', name: 'Frontend', icon: '🎨' },
  { id: 'Mobile', name: 'Mobile App', icon: '📱' },
  { id: 'FullStack', name: 'Full-Stack', icon: '⚡' },
  { id: 'Desktop', name: 'Desktop Apps', icon: '🖥️' },
  { id: 'GameDev', name: 'Game Dev', icon: '🎮' },
  { id: 'DataAI', name: 'Data & AI', icon: '🧠' },
  { id: 'Systems', name: 'Systems', icon: '⚙️' },
  { id: 'Cloud', name: 'Cloud & DevOps', icon: '☁️' },
];

const CategoryScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: theme.cardBg }]} 
      onPress={() => navigation.navigate('Quiz', { category: item.id })}
    >
      <Text style={styles.icon}>{item.icon}</Text>
      <View>
          <Text style={[styles.name, { color: theme.text }]}>{item.name}</Text>
          <Text style={[styles.sub, { color: theme.subText }]}>Tap to start quiz</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList 
        data={categories}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <Text style={[styles.header, { color: theme.text }]}>Choose a Field</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  list: { paddingBottom: 20 },
  card: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000', 
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  icon: { fontSize: 32, marginRight: 20 },
  name: { fontSize: 18, fontWeight: 'bold' },
  sub: { fontSize: 12 },
});

export default CategoryScreen;