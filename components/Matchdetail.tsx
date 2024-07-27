import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MatchDetailComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Kol to win the match against  Mum?</Text>
      <Text style={styles.paragraph}>H2H in last 5 T20 Kol: 4 Mum 1 Draw:0</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.yesButton]}>
          <Icon name="rupee" size={16} color="#fff" />
          <Text style={styles.buttonText}>4.5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.noButton]}>
          <Icon name="rupee" size={16} color="#fff" />
          <Text style={styles.buttonText}>4.6</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    margin: 10,
    alignItems: 'center',
  },
  heading: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    width: '48%', // To fit two buttons in a row with spacing
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
