import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const NewsCard = ({ item }: { item: any }) => {
  return (
    <View
      style={{
        width,
        height,
        backgroundColor: '#000',
      }}
    >
      <ImageBackground
        source={{ uri: item.image }}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.95)']}
          style={{
            padding: 20,
            paddingBottom: 50,
          }}
        >
          <View
            style={{
              position: 'absolute',
              top: -height + 70,
              right: 20,
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity style={{ marginHorizontal: 8 }}>
              <Ionicons name="bookmark-outline" size={28} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={{ marginHorizontal: 8 }}>
              <Ionicons name="share-social-outline" size={28} color="#fff" />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              color: '#00AEEF',
              fontSize: 14,
              fontWeight: '700',
              marginBottom: 10,
            }}
          >
            {item.category}
          </Text>

          <Text
            style={{
              color: '#fff',
              fontSize: 28,
              fontWeight: 'bold',
              marginBottom: 15,
            }}
          >
            {item.title}
          </Text>

          <Text
            style={{
              color: '#ddd',
              fontSize: 16,
              lineHeight: 24,
            }}
            numberOfLines={14}
          >
            {item.description}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: '#999',
                fontSize: 13,
              }}
            >
              {item.author}
            </Text>

            <Text
              style={{
                color: '#999',
                fontSize: 13,
              }}
            >
              {item.time}
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default NewsCard;
