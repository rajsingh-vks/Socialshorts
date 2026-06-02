import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import dummyNews from '../components/common/dummyNews';

const TOPICS = ['All', 'Tech', 'Business', 'Sports', 'World', 'Space'];

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [activeTopic, setActiveTopic] = useState('All');

  const filteredNews = useMemo(
    () =>
      dummyNews.filter((item) => {
        const lowerQuery = query.trim().toLowerCase();
        const matchesQuery =
          !lowerQuery ||
          item.title.toLowerCase().includes(lowerQuery) ||
          item.description.toLowerCase().includes(lowerQuery) ||
          item.category.toLowerCase().includes(lowerQuery) ||
          item.author.toLowerCase().includes(lowerQuery);
        const matchesTopic = activeTopic === 'All' || item.category === activeTopic;
        return matchesQuery && matchesTopic;
      }),
    [query, activeTopic],
  );

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Search</Text>
          <Text style={styles.pageSubtitle}>Find the latest stories, topics, and authors.</Text>
        </View>

        <View style={styles.searchRow}>
          <Ionicons name="search-outline" size={20} color="#777" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search news, tech, business..."
            placeholderTextColor="#9a9a9a"
            value={query}
            onChangeText={setQuery}
            returnKeyType="search"
          />
        </View>

        <View style={styles.topicRow}>
          {TOPICS.map((topic) => (
            <TouchableOpacity
              key={topic}
              style={[styles.topicPill, activeTopic === topic && styles.topicPillActive]}
              onPress={() => setActiveTopic(topic)}
              activeOpacity={0.8}
            >
              <Text style={[styles.topicText, activeTopic === topic && styles.topicTextActive]}>
                {topic}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>

      <FlatList
        data={filteredNews}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.resultList}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.resultHeader}>
            <Text style={styles.resultLabel}>Results</Text>
            <Text style={styles.resultCount}>{filteredNews.length} stories found</Text>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.resultCard} activeOpacity={0.85}>
            <Image source={{ uri: item.image }} style={styles.resultImage} />
            <View style={styles.resultDetails}>
              <View style={styles.badge}> 
                <Text style={styles.badgeText}>{item.category}</Text>
              </View>
              <Text style={styles.resultTitle} numberOfLines={1}>
                {item.title}
              </Text>
              <Text style={styles.resultDescription} numberOfLines={1}>
                {item.description}
              </Text>
              <Text style={styles.resultMeta}>{`${item.author} · ${item.time}`}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>No stories found</Text>
            <Text style={styles.emptyText}>Try another search term or clear the filter above.</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  safeArea: {
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111',
  },
  pageSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 6,
    lineHeight: 20,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 14,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#111',
  },
  topicRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  topicPill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#e9e9e9',
    marginRight: 10,
    marginBottom: 10,
  },
  topicPillActive: {
    backgroundColor: '#000',
  },
  topicText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#444',
  },
  topicTextActive: {
    color: '#fff',
  },
  resultList: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  resultHeader: {
    marginBottom: 12,
  },
  resultLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },
  resultCount: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },
  resultCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 2,
  },
  resultImage: {
    width: 120,
    height: 120,
  },
  resultDetails: {
    flex: 1,
    padding: 14,
    justifyContent: 'space-between',
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
    lineHeight: 22,
  },
  resultDescription: {
    fontSize: 13,
    color: '#555',
    marginTop: 4,
    lineHeight: 18,
  },
  resultMeta: {
    fontSize: 10,
    color: '#888',
    marginTop: 8,
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 20,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default SearchPage;
