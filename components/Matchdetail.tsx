
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomModal from '../components/Model'; // Adjust path as necessary

const MatchDetailComponent: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Kolkatta to win the match vs Mumbai?</Text>
      <Text style={styles.paragraph}>H2H in the Last 5 T20 Kol:4 Mum 1 Draw:0</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.yesButton]} onPress={openModal}>
          <Icon name="rupee" size={16} color="#fff" />
          <Text style={styles.buttonText}>4.5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.noButton]} onPress={openModal}>
          <Icon name="rupee" size={16} color="#fff" />
          <Text style={styles.buttonText}>4.6</Text>
        </TouchableOpacity>
      </View>
      <BottomModal visible={modalVisible} onClose={closeModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
    width:'40%',
    display:'flex',
    justifyContent:'center',
    alignSelf:'center'
  },
  yesButton: {
    backgroundColor: 'green',
  },
  noButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default MatchDetailComponent;
