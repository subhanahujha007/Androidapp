import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HorizontalScrollComponent = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.scrollContainer}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.itemsWrapper}>
        <View style={styles.row}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Kol Vs Mum</Text>
          </View>

          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Psg vs Dor</Text>
          </View>
          
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Bitcoin</Text>
          </View>
          
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Growth</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Psg vs Dor</Text>
          </View>
          
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Kol Vs Mum</Text>
          </View>

          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Kol Vs Mum</Text>
          </View>
          
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Psg vs Dor</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 10,
  },
  itemsWrapper: {
    flexDirection: 'column', // Stack rows vertically
    gap: 5, // Add gap between rows (Requires React Native 0.70+)
  },
  row: {
    flexDirection: 'row', // Stack items horizontally within each row
    marginBottom: 10, // Space between rows
  },
  itemContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingVertical: 4, // Adjust padding to control item height
    paddingHorizontal: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 14, // Adjust font size to fit your design
  },
});

export default HorizontalScrollComponent;
