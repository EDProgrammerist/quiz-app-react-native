<div align="center">

  # 📱 Quiz++
  ### Master the Code

  <br>

  ![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
  ![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=FFFFFF)
  ![Node js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

  <br>
  <br>

  A modern, interactive mobile quiz game built with **React Native** and **Expo**. Test your knowledge of programming languages, frameworks, and tech stacks across domains like Backend, Frontend, Mobile, and AI.

</div>

---

## 📸 Screenshots

<div align="center">
  <img src="path/to/home-screen.png" width="220" alt="Home Screen" />
  <img src="path/to/quiz-screen.png" width="220" alt="Quiz Screen" />
  <img src="path/to/learn-mode.png" width="220" alt="Learn Mode" />

</div>

---

## ✨ Features

* **🎮 Game Modes:**
    * **Quiz Mode:** Randomly generated questions (Identify Logo, Extension, or Use Case).
    * **Timer Pressure:** 10-second countdown per question.
    * **Categories:** Filter questions by industry (Frontend, Backend, Mobile, AI, etc.).
* **🏆 Persistence:**
    * Saves **High Scores** per category using Async Storage.
    * Remembers **Dark/Light Mode** preference.
* **🎨 Modern UI/UX:**
    * **Dark Mode:** Fully themed interface (auto-detects or manual toggle).
    * **Animations:** Smooth transitions and bouncy button effects.
    * **Sound Effects:** Custom audio for Correct, Wrong, and Game Over states.
* **📚 Learn Mode:** A searchable dictionary of 20+ programming languages and frameworks.

## 🛠️ Tech Stack

* **Framework:** [React Native](https://reactnative.dev/) (via [Expo](https://expo.dev/))
* **Navigation:** [React Navigation v6](https://reactnavigation.org/) (Native Stack)
* **Storage:** `@react-native-async-storage/async-storage`
* **Audio:** `expo-av`
* **Icons:** React Native Vector Icons (via Expo)

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites
* Node.js installed
* Expo Go app on your phone (iOS/Android) OR an Emulator

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/yourusername/DevQuiz.git](https://github.com/yourusername/DevQuiz.git)
    cd DevQuiz
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the server**
    ```bash
    npx expo start -c
    ```

4.  **Run the App**
    * Scan the QR code with your phone (using Expo Go).
    * Or press `a` for Android Emulator / `i` for iOS Simulator.

## 📂 Project Structure
```

Quiz++/
├── assets/                 # Images and Sounds (correct.mp3, etc.)
├── src/
│   ├── context/            # Global State (ThemeContext)
│   ├── data/               # Data Source (languages.js)
│   └── screens/            # Application Screens
│       ├── HomeScreen.js   # Main Menu
│       ├── CategoryScreen.js # Topic Selection
│       ├── QuizScreen.js   # Game Logic & Timer
│       ├── LearnScreen.js  # Searchable Dictionary
│       └── DetailsScreen.js # Language Info View
├── App.js                  # Navigation Entry Point
└── app.json                # Expo Configuration

```
## 🧩 Categories
- [Backend] (Node.js, Python, Java, Go, PHP)
- [Frontend] (JavaScript, TypeScript, React, Vue, Angular)
- [Mobile] (Swift, Kotlin, Dart/Flutter)
- [Systems] (C, C++, Rust)
- [Data] & [AI] (Python, R, Julia)
- [Cloud] & [DevOps] (Go, Bash, Terraform)