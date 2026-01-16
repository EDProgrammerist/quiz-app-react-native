// src/screens/QuizScreen.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import { useContext, useEffect, useRef, useState } from 'react';
import { Alert, Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { languages } from '../data/languages';

const QUESTION_TIMER = 10;

const getRandomOptions = (correctAnswer, allData) => {
  // Fallback if not enough data
  if (allData.length < 4) return allData;
  
  const options = [correctAnswer];
  while (options.length < 4) {
    const randomItem = allData[Math.floor(Math.random() * allData.length)];
    // Ensure unique options
    if (!options.find(o => o.id === randomItem.id)) {
      options.push(randomItem);
    }
  }
  return options.sort(() => Math.random() - 0.5);
};

const QuizScreen = ({ navigation, route }) => {
  // Default to 'Backend' if nothing passed, just for safety
  const { category } = route.params || { category: 'Backend' };
  const { theme } = useContext(ThemeContext);
  
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [questionType, setQuestionType] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIMER);
  
  // Audio Objects
  const [soundCorrect, setSoundCorrect] = useState();
  const [soundWrong, setSoundWrong] = useState();
  const [soundGameOver, setSoundGameOver] = useState();

  // Animation Refs
  const fadeAnim = useRef(new Animated.Value(1)).current; 
  const timerRef = useRef(null);

  useEffect(() => {
    loadHighScore();
    loadSounds();
    const success = generateQuestion();
    if (!success) navigation.goBack();

    return () => {
      clearInterval(timerRef.current);
      unloadSounds();
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) handleGameOver("Time's Up!");
  }, [timeLeft]);

  // --- SOUND LOGIC ---
  async function loadSounds() {
    try {
      const { sound: s1 } = await Audio.Sound.createAsync(require('../../assets/sounds/correct.mp3'));
      const { sound: s2 } = await Audio.Sound.createAsync(require('../../assets/sounds/wrong.mp3'));
      const { sound: s3 } = await Audio.Sound.createAsync(require('../../assets/sounds/gameover.mp3'));
      setSoundCorrect(s1);
      setSoundWrong(s2);
      setSoundGameOver(s3);
    } catch (error) {
       // console.log("Sound files missing - skipping audio");
    }
  }

  async function unloadSounds() {
    if (soundCorrect) await soundCorrect.unloadAsync();
    if (soundWrong) await soundWrong.unloadAsync();
    if (soundGameOver) await soundGameOver.unloadAsync();
  }

  async function playSound(type) {
    try {
      if (type === 'correct' && soundCorrect) await soundCorrect.replayAsync();
      if (type === 'wrong' && soundWrong) await soundWrong.replayAsync();
      if (type === 'gameover' && soundGameOver) await soundGameOver.replayAsync();
    } catch (error) {
      // console.log("Play failed");
    }
  }

  // --- QUIZ LOGIC ---
  const startTimer = () => {
    clearInterval(timerRef.current);
    setTimeLeft(QUESTION_TIMER);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
  };

  const loadHighScore = async () => {
    const storedScore = await AsyncStorage.getItem(`HIGH_SCORE_${category}`);
    if (storedScore) setHighScore(parseInt(storedScore));
  };

  const saveHighScore = async (newScore) => {
    await AsyncStorage.setItem(`HIGH_SCORE_${category}`, newScore.toString());
    setHighScore(newScore);
  };

  // --- NEW FILTER LOGIC ---
  const getQuizData = () => {
      if (!category) return languages;
      // Filter based on the new 'categories' array in languages.js
      return languages.filter(l => l.categories && l.categories.includes(category));
  };

  const generateQuestion = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }).start();

    // 1. Get filtered data
    const quizData = getQuizData();
    
    // 2. Safety check: Do we have enough questions?
    if (quizData.length < 2) {
        Alert.alert("Oops", `Not enough questions for ${category} yet! Add more to languages.js`);
        navigation.navigate('Category'); 
        return false;
    }

    // 3. Pick a random question
    const randomLang = quizData[Math.floor(Math.random() * quizData.length)];
    
    // 4. Get Options (Mix correct answer with others from the filtered list, fallback to all languages if needed)
    const optionsPool = quizData.length >= 4 ? quizData : languages;
    const choices = getRandomOptions(randomLang, optionsPool);
    
    setCurrentQuestion(randomLang);
    setQuestionType(Math.floor(Math.random() * 3));
    setOptions(choices);
    startTimer();
    return true;
  };

  const handleGameOver = (reason) => {
    clearInterval(timerRef.current);
    playSound('gameover');
    
    Alert.alert(
      "Game Over!", 
      `${reason}\nCorrect answer: ${currentQuestion?.name}\nFinal Score: ${score}`, 
      [
        { 
          text: "Back to Menu", 
          onPress: () => {
             navigation.reset({
               index: 1,
               routes: [{ name: 'Home' }, { name: 'Category' }],
             });
          } 
        }
      ],
      { cancelable: false }
    );
  };

  const handleAnswer = (selected, index) => {
    if (selected.id === currentQuestion.id) {
      // Correct!
      clearInterval(timerRef.current);
      playSound('correct');
      
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > highScore) saveHighScore(newScore);

      setTimeout(generateQuestion, 500); 
    } else {
      // Wrong!
      playSound('wrong');
      handleGameOver("Wrong Answer!");
    }
  };

  if (!currentQuestion) return <View style={[styles.container, {backgroundColor: theme.background}]}><Text>Loading...</Text></View>;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: theme.cardBg }]}>
        <View>
            <Text style={styles.label}>Score</Text>
            <Text style={[styles.scoreValue, { color: theme.primary }]}>{score}</Text>
        </View>
        <View style={styles.timerContainer}>
            <Text style={[styles.timerText, { color: timeLeft <= 3 ? 'red' : theme.text }]}>
                {timeLeft}
            </Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.label}>Best</Text>
            <Text style={styles.highScoreValue}>{highScore}</Text>
        </View>
      </View>

      <Animated.View style={[styles.questionContainer, { opacity: fadeAnim }]}>
        {questionType === 0 && (
          <>
            <Text style={[styles.questionText, { color: theme.text }]}>Which language is this?</Text>
            <Image source={{ uri: currentQuestion.logo }} style={styles.logo} resizeMode="contain" />
          </>
        )}
        {questionType === 1 && (
          <>
            <Text style={[styles.questionText, { color: theme.text }]}>Which language uses this extension?</Text>
            <Text style={[styles.bigText, { color: theme.text }]}>{currentQuestion.extension}</Text>
          </>
        )}
        {questionType === 2 && (
          <>
            <Text style={[styles.questionText, { color: theme.text }]}>Which language is primarily for?</Text>
            <Text style={[styles.mediumText, { color: theme.text }]}>{currentQuestion.useCase}</Text>
          </>
        )}
      </Animated.View>

      <View style={styles.optionsContainer}>
        {options.map((opt, index) => (
          <OptionButton 
            key={opt.id} 
            item={opt} 
            theme={theme} 
            onPress={() => handleAnswer(opt, index)} 
          />
        ))}
      </View>
    </View>
  );
};

// Component for Animation
const OptionButton = ({ item, theme, onPress }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 0.95, duration: 100, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 3, useNativeDriver: true })
    ]).start();
    onPress();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity 
        style={[styles.optionButton, { backgroundColor: theme.cardBg, borderColor: theme.subText }]} 
        onPress={handlePress}
        activeOpacity={0.8}
      >
        <Text style={[styles.optionText, { color: theme.text }]}>{item.name}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    padding: 15,
    borderRadius: 12,
  },
  label: { fontSize: 12, color: '#888', fontWeight: 'bold' },
  scoreValue: { fontSize: 24, fontWeight: 'bold' },
  highScoreValue: { fontSize: 24, fontWeight: 'bold', color: '#e24a4a' },
  timerContainer: {
      borderWidth: 2,
      borderColor: '#ddd',
      borderRadius: 50,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
  },
  timerText: { fontSize: 18, fontWeight: 'bold' },
  questionContainer: { alignItems: 'center', marginBottom: 40, minHeight: 180, justifyContent: 'center' },
  questionText: { fontSize: 20, marginBottom: 20, textAlign: 'center' },
  logo: { width: 100, height: 100 },
  bigText: { fontSize: 40, fontWeight: 'bold' },
  mediumText: { fontSize: 22, fontWeight: '600', textAlign: 'center' },
  optionsContainer: { width: '100%' },
  optionButton: {
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
  },
  optionText: { fontSize: 18, fontWeight: '500' },
});

export default QuizScreen;