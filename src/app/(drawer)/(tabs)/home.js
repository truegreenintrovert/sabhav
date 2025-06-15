
import CustomHeader from '../../components/CustomHeader';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const INSPIRATIONAL_QUOTES = [
  { id: '1', quote: "Believe in yourself and all that you are. 🌟", image: require('../../assets/quotes1.png') },
  { id: '2', quote: "Every day is a new beginning. 💫", image: require('../../assets/quotes2.png') },
  { id: '3', quote: "Stay positive, work hard, make it happen. 🚀", image: require('../../assets/quotes3.png') },
  { id: '4', quote: "You are stronger than you think. 💪", image: require('../../assets/quotes4.png') },
  { id: '5', quote: "Happiness is a choice. Choose wisely. 😊", image: require('../../assets/quotes5.png') },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader title="Home" />
      <FlatList
        data={INSPIRATIONAL_QUOTES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.quoteCard}>
            <Image source={item.image} style={styles.quoteImage} resizeMode="cover" />
            <Text style={styles.quoteText}>{item.quote}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  listContainer: { padding: 16 },
  quoteCard: {
    backgroundColor: '#f7e6fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 5,
    borderLeftColor: '#970dbd',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  quoteImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#333',
    textAlign: 'center',
  },
});

