import React from 'react';
import { View, FlatList, Dimensions, StatusBar } from 'react-native';

import NewsCard from '../components/news/NewsCard';
import dummyNews from '../components/common/dummyNews';

const { height } = Dimensions.get('window');

const HomePage = () => {
  const renderItem = ({ item }: { item: any }) => {
    return <NewsCard item={item} />;
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <FlatList
        data={dummyNews}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        decelerationRate="fast"
      />
    </View>
  );
};

export default HomePage;
