import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ProfileImage: React.FC = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: 'https://media.istockphoto.com/id/172339615/photo/swimmer.jpg?s=612x612&w=0&k=20&c=huApx630f-6OJcVLK3zqxQVM0iuqCh_tVMphK0JUoJk=' }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10, // Adds vertical spacing around the image
    },
    image: {
      width: '100%', // Adjust width as needed
      height: 200, // Adjust height as needed
      resizeMode: 'cover',
    },
  });
  export default ProfileImage