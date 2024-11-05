import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Sound from 'react-native-sound';
import LottieView from 'lottie-react-native';

const ScreenTwo = ({ navigation, route }) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const magicSound = new Sound('magic-sound.mp3', Sound.MAIN_BUNDLE);

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const handleTap = () => {
    magicSound.play();
    
    Animated.sequence([
      Animated.spring(scaleAnim, {
        toValue: 1.2,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/animations/magic.json')}
        autoPlay
        loop
        style={styles.animation}
      />

      <Animated.Text 
        style={[
          styles.text,
          {
            transform: [
              { rotate: spin },
              { scale: scaleAnim }
            ]
          }
        ]}
        onPress={handleTap}
      >
        {route.params.message}
      </Animated.Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleTap}
      >
        <Text style={styles.buttonText}>Tap for Magic! ✨</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>← Back to More Fun</Text>
      </TouchableOpacity>
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
  text: {
    fontSize: 24,
    color: 'white',
    margin: 20,
    textAlign: 'center',
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

export default ScreenTwo;