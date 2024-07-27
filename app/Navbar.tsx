import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Navbar: React.FC = () => {
  return (
    <View style={styles.navbar}>
      {/* Avatar on the left */}
      <TouchableOpacity>
        <Icon name="user-circle" size={40} color="#000" />
      </TouchableOpacity>

    

      {/* Notification icon on the right */}
      <TouchableOpacity>
        <Icon name="bell" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // for Android shadow
  }
});

export default Navbar;
