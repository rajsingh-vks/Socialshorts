import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfilePage = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Profile</Text>
    <Text style={styles.subtitle}>User profile and settings.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
});

export default ProfilePage;
