import React, { useState } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width: screenWidth } = Dimensions.get('window');

interface CustomSliderProps {
  onComplete: () => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ onComplete }) => {
  const [slideValue] = useState(new Animated.Value(0));
  const [isComplete, setIsComplete] = useState(false);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (!isComplete) {
        const newValue = Math.max(0, Math.min(screenWidth - 60, gestureState.dx));
        slideValue.setValue(newValue);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx >= screenWidth - 60) {
        setIsComplete(true);
        Animated.timing(slideValue, {
          toValue: screenWidth - 60,
          duration: 300,
          useNativeDriver: false,
        }).start(() => {
          onComplete();
        });
      } else {
        Animated.spring(slideValue, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const thumbStyle = {
    transform: [{ translateX: slideValue }],
  };

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Animated.View style={[styles.thumb, thumbStyle]} {...panResponder.panHandlers}>
          <Icon name="arrow-right" size={20} color="#fff" />
        </Animated.View>
      </View>
      <Text style={[styles.text, isComplete && styles.textSuccess]}>
        {isComplete ? 'Order Successful' : 'Slide to Confirm'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  sliderContainer: {
    width: '100%',
    height: 40,
    backgroundColor: '#ddd',
    borderRadius: 20,
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  thumb: {
    position: 'absolute',
    width: 60,
    height: 40,
    backgroundColor: '#007BFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
  textSuccess: {
    color: 'green',
  },
});

export default CustomSlider;
