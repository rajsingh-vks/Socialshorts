import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchPage = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Search</Text>
    <Text style={styles.subtitle}>Search for content here.</Text>
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

export default SearchPage;
