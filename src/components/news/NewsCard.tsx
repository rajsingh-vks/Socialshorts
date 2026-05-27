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
const CARD_HEIGHT = height * 0.8;

const NewsCard = ({ item }: { item: any }) => {
  return (
    <View
      style={{
        width,
        height: CARD_HEIGHT,
        backgroundColor: '#f5f5f5',
        // marginVertical: (height - CARD_HEIGHT) / 2,
      }}
    >
      <ImageBackground
        source={{ uri: item.image }}
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}
        resizeMode="cover"
      >
        {/* Category Badge */}
        <View style={{ padding: 20 }}>
          <View
            style={{
              alignSelf: 'flex-start',
              backgroundColor: '#d32f2f',
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 12,
                fontWeight: '700',
                letterSpacing: 0.5,
              }}
            >
              • {item.category}
            </Text>
          </View>
        </View>

        {/* Content Gradient */}
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.9)']}
          style={{
            //padding: 20,
            paddingBottom: 50,
            gap: 12,
          }}
        >
          <View style={{ padding: 20 }}>
            {/* Title */}
            <Text
              style={{
                color: '#fff',
                fontSize: 24,
                fontWeight: '700',
                lineHeight: 32,
                marginBottom: 8,
              }}
              numberOfLines={3}
            >
              {item.title}
            </Text>

            {/* Description */}
            <Text
              style={{
                color: '#e0e0e0',
                fontSize: 14,
                lineHeight: 20,
                marginBottom: 4,
              }}
              numberOfLines={2}
            >
              {item.description}
            </Text>

            {/* Metadata Row */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 12,
                borderTopWidth: 1,
                borderTopColor: 'rgba(255,255,255,0.2)',
                paddingTop: 12,
              }}
            >
              <View>
                <Text
                  style={{
                    color: '#999',
                    fontSize: 12,
                    fontWeight: '600',
                    letterSpacing: 0.3,
                  }}
                >
                  {item.author.toUpperCase()} · {item.time}
                </Text>
              </View>

              {/* Action Icons */}
              <View style={{ flexDirection: 'row', gap: 16 }}>
                <TouchableOpacity hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                  <Ionicons name="share-social-outline" size={20} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                  <Ionicons name="bookmark-outline" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default NewsCard;
