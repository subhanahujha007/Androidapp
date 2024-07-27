import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import CustomSlider from '../components/Customslider'; // Ensure this path is correct

interface BottomModalProps {
  visible: boolean;
  onClose: () => void;
}

const BottomModal: React.FC<BottomModalProps> = ({ visible, onClose }) => {
  const [sliderValue, setSliderValue] = useState(50); // Initial slider value
  const [sliderCompleted, setSliderCompleted] = useState(false); // State for custom slider completion

  const handleSliderComplete = () => {
    setSliderCompleted(true);
    setTimeout(() => {
      onClose(); // Close modal after delay
    }, 500); // Adjust delay as needed
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.headline}>Kolkata to Win a Match Against Mumbai?</Text>

          <View style={styles.toggleContainer}>
            <TouchableOpacity style={[styles.toggleButton, styles.yesButton]}>
              <Text style={styles.toggleButtonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.toggleButton, styles.noButton]}>
              <Text style={styles.toggleButtonText}>No</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.priceContainer}>
            <View style={styles.priceHeader}>
              <Text style={styles.priceLabel}>Price:</Text>
              <Text style={styles.priceAmount}>₹50.00</Text>
            </View>
            
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              step={1}
              value={sliderValue}
              onValueChange={(value) => setSliderValue(value)}
              minimumTrackTintColor="#007BFF"
              maximumTrackTintColor="#ddd"
              thumbTintColor="#007BFF"
            />

            <View style={styles.priceRangeContainer}>
              <Text style={styles.priceRange}>You put: ₹4.6</Text>
              <Text style={styles.priceRange}>You get: ₹100</Text>
            </View>
          </View>

          <CustomSlider onComplete={handleSliderComplete} />

         
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '100%',
    height: '70%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  toggleButton: {
    padding: 10,
    borderRadius: 20,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yesButton: {
    backgroundColor: 'green',
  },
  noButton: {
    backgroundColor: 'red',
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  priceContainer: {
    marginVertical: 20,
  },
  priceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  priceLabel: {
    fontSize: 18,
  },
  priceAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  slider: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
  },
  priceRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  priceRange: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default BottomModal;
