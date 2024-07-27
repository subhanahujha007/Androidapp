// SportItem.tsx
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface SportItemProps {
  imageUrl: string;
  name: string;
}

const SportItem: React.FC<SportItemProps> = ({ imageUrl, name }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 80, // Adjust size as needed
    height: 80, // Adjust size as needed
    resizeMode: 'contain',
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SportItem;
