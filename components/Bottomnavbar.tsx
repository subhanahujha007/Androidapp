// BottomNavbar.tsx
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BottomNavbar: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="home" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="search" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="bell" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="user" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    elevation: 4, // Android shadow
  },
  iconButton: {
    padding: 10,
  },
});

export default BottomNavbar;
