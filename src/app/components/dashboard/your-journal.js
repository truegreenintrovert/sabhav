import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';

export default function YourJournal() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Your Journal</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.bodyText}>Your Journal Will Appear here.</Text>
      </View>
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
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 16,
    color: '#333',
  },
});
