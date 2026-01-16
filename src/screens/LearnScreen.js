// src/screens/LearnScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, FlatList, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { languages } from '../data/languages';
import { ThemeContext } from '../context/ThemeContext'; // 1. Import Context

const LearnScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext); // 2. Get theme
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(languages);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const newData = languages.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(languages);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: theme.cardBg }]} 
      onPress={() => navigation.navigate('Details', { language: item })}
    >
      <Image source={{ uri: item.logo }} style={styles.logo} resizeMode="contain" />
      <View style={styles.info}>
        <Text style={[styles.name, { color: theme.text }]}>{item.name}</Text>
        {/* Update: Show the first category as the subtitle */}
        <Text style={[styles.desc, { color: theme.primary }]} numberOfLines={1}>
            {item.categories ? item.categories.join(', ') : 'General'}
        </Text>
        <Text style={[styles.desc, { color: theme.subText, fontSize: 12 }]} numberOfLines={1}>
            {item.paradigm}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    // 5. Dynamic Container Background
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <TextInput
        style={[
            styles.searchBar, 
            { 
                backgroundColor: theme.cardBg, 
                color: theme.text,
                borderColor: theme.subText
            }
        ]}
        placeholder="Search languages..."
        placeholderTextColor={theme.subText} // 6. Dynamic Placeholder
        value={search}
        onChangeText={(text) => handleSearch(text)}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Background color removed here, handled inline
  },
  searchBar: {
    padding: 15,
    margin: 15,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1, // Added border for better contrast in dark mode
    borderColor: '#ddd', 
  },
  list: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
    // Shadow only works well in light mode, but keeping it doesn't hurt
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default LearnScreen;