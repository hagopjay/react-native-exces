import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Sound from 'react-native-sound';
import ConfettiCannon from 'react-native-confetti-cannon';
import LottieView from 'lottie-react-native';
import ParticlesBg from 'react-native-particles-bg';

const ScreenOne = ({ navigation }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const celebrationSound = new Sound('celebration.mp3', Sound.MAIN_BUNDLE);

  const playSound = () => {
    celebrationSound.play((success) => {
      if (!success) {
        console.log('Sound playback failed');
      }
    });
  };

  const handleParty = () => {
    playSound();
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <View style={styles.container}>
      <ParticlesBg type="circle" bg={true} />
      
      <LottieView
        source={require('../assets/animations/party.json')}
        autoPlay
        loop
        style={styles.animation}
      />

      <Text style={styles.title}>Welcome to Fun Times! 🎉</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={handleParty}
      >
        <Text style={styles.buttonText}>Tap for Fun! 🎊</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Two', { message: "Let's celebrate! 🎉" })}
      >
        <Text style={styles.buttonText}>More Fun! →</Text>
      </TouchableOpacity>

      {showConfetti && (
        <ConfettiCannon
          count={200}
          origin={{x: Dimensions.get('window').width / 2, y: 0}}
          autoStart={true}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff69b4',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#2e6ddf',
  },
  animation: {
    width: 200,
    height: 200,
  }
});

export default ScreenOne;