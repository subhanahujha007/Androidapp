// Sports.tsx
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import SportItem from '../components/Sportsitem'; // Adjust the path as needed
import { sportsData } from '../assets/Sports'; // Adjust the path as needed

const Sports: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={sportsData}
        renderItem={({ item }) => (
          <SportItem imageUrl={item.imageUrl} name={item.name} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true} // Enable horizontal scrolling
        showsHorizontalScrollIndicator={false} // Hide the horizontal scroll indicator
        contentContainerStyle={styles.scrollContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%', // Take up the full width of the parent
  },
  scrollContainer: {
    paddingVertical: 10, // Add vertical padding
  },
});

export default Sports;
