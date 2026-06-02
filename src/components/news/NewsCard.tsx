import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');
const CARD_HEIGHT = height - 180;

const NewsCard = ({ item }: { item: any }) => {
  return (
    <View
      style={{
        width,
        height: CARD_HEIGHT,
        backgroundColor: '#f5f5f5',
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
        <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: CARD_HEIGHT * 0.55 }}>
          <LinearGradient
            colors={['transparent', 'rgba(255,255,255,0.75)', 'rgba(255,255,255,0.95)']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              paddingTop: 20,
            }}
          >
            <View style={{ paddingHorizontal: 20, paddingBottom: Platform.OS === 'ios' ? 105 : 24 }}>
              {/* Title */}
              <Text
                style={{
                  color: '#000',
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
                  color: '#222',
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
                  marginTop: 16,
                  borderTopWidth: 1,
                  borderColor: 'rgba(0,0,0,0.22)',
                  borderBottomWidth: 1,
                  paddingTop: 14,
                  paddingBottom: 14,
                }}
              >
                <View>
                  <Text
                    style={{
                      color: '#444',
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
                    <Ionicons name="share-social-outline" size={20} color="#000" />
                  </TouchableOpacity>

                  <TouchableOpacity hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                    <Ionicons name="bookmark-outline" size={20} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </View>
  );
};

export default NewsCard;
