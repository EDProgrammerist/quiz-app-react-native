// App.js
import React, { useContext } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, ThemeContext } from './src/context/ThemeContext';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import CategoryScreen from './src/screens/CategoryScreen'; // <--- Added this
import QuizScreen from './src/screens/QuizScreen';
import LearnScreen from './src/screens/LearnScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { theme, isDarkMode } = useContext(ThemeContext);

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.background,
      card: theme.primary,
      text: theme.tint,
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <Stack.Navigator 
        screenOptions={{
          headerStyle: { backgroundColor: theme.primary },
          headerTintColor: theme.tint,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Quiz++' }} />
        <Stack.Screen name="Category" component={CategoryScreen} options={{ title: 'Select Topic' }} /> 
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Learn" component={LearnScreen} options={{ title: 'Dictionary' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}