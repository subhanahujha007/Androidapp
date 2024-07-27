import React from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar } from 'react-native';
import { Link } from 'expo-router';
import Sports from '../Sports';
import HorizontalScrollComponent from '@/components/Horizontalscrool'; // Correct import path
import Match from '@/components/Match'; // Correct import path
import ProfileImage from '@/components/Profile';
import Navbar from '../Navbar';
import BottomNavbar from '@/components/Bottomnavbar';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
  return (
    <>
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Navbar />
        <ProfileImage />
        <View style={styles.container}>
          <Sports />
        </View>
        
        <View style={styles.container}>
          <Text style={styles.text}>Trending Now</Text>
          <HorizontalScrollComponent />
        </View>
        
        <View style={styles.container}>
          <Text style={styles.text}>Upcoming Matches</Text>
          <Match />
        </View>
      </ScrollView>
      <BottomNavbar />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  container: {
    marginBottom: 10, // Space between sections
    paddingHorizontal: 10, // Optional: Add padding on the sides
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold', // Make the text bold
    marginVertical: 10, // Add vertical margin for spacing
    textAlign: 'center', // Center the text
  },
  link: {
    color: 'blue',
    marginTop: 10,
    textAlign: 'center',
  },
});
