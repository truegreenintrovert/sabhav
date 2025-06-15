import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const mockChats = [
  { id: '1', message: 'Hi, how are you?', timestamp: '2025-06-15 10:00 AM' },
  { id: '2', message: 'I’m doing well. Thanks!', timestamp: '2025-06-15 10:01 AM' },
  { id: '3', message: 'Glad to hear that.', timestamp: '2025-06-15 10:02 AM' },
];

export default function ChatHistory() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Chat History</Text>
      </View>

      <FlatList
        data={mockChats}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.chatItem}>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#970dbd',
    textAlign: 'center',
  },
  listContainer: {
    padding: 16,
  },
  chatItem: {
    backgroundColor: '#f7e6fa',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    color: '#333',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});
