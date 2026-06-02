import React, { useState } from 'react';
import { View, FlatList, Dimensions, StatusBar, Text, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import NewsCard from '../components/news/NewsCard';
import dummyNews from '../components/common/dummyNews';

const { height } = Dimensions.get('window');
const CARD_HEIGHT = height - 180;

const CATEGORIES = ['All', 'Tech', 'Business', 'Sports', 'World', 'Space'];

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const renderItem = ({ item }: { item: any }) => {
    return <NewsCard item={item} />;
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      {/* Header */}
      <SafeAreaView edges={['top']} style={{ backgroundColor: '#f5f5f5' }}>
        <View style={{ paddingHorizontal: 20, paddingTop: Platform.OS === 'android' ? 12 : 10, paddingBottom: 15, backgroundColor: '#f5f5f5' }}>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#000' }}>SocialistShort<Text style={{ fontSize: 32, fontWeight: '300' }}>.</Text></Text>
          <Text style={{ fontSize: 12, color: '#666', marginTop: 4, letterSpacing: 1 }}>600-SECOND BRIEFINGS</Text>
        </View>
      </SafeAreaView>

      {/* Category Filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 20, paddingBottom: 12 }}
        contentContainerStyle={{ gap: 8 }}
      >
        {CATEGORIES.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => setSelectedCategory(category)}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 20,
              height:33,
              backgroundColor: selectedCategory === category ? '#000' : '#e0e0e0',
            }}
          >
            <Text
              style={{
                color: selectedCategory === category ? '#fff' : '#333',
                fontSize: 14,
                fontWeight: '500',
              }}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* News Feed */}
      <FlatList
        data={dummyNews}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={CARD_HEIGHT}
        snapToAlignment="start"
        contentContainerStyle={{ paddingBottom: 20 }}
        decelerationRate="fast"
        scrollEventThrottle={16}
      />
    </View>
  );
};

export default HomePage;
