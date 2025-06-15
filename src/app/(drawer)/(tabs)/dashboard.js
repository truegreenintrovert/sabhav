import {View, Pressable, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from '../../components/CustomHeader'; // adjust path as per location

export default function DashboardTab() {
  const router = useRouter();

  const buttons = [
    { label: 'Chat History', route: '../../components/dashboard/chat-history', icon: 'chatbox-ellipses-outline' },
    { label: 'View Activity', route: '../../components/dashboard/view-activity', icon: 'pulse-outline' },
    { label: 'Talk to Counselor', route: '../../components/dashboard/talk-to-counselor', icon: 'people-outline' },
    { label: 'Scheduler', route: '../../components/dashboard/scheduler', icon: 'calendar-outline' },
    { label: 'Audio Affirmation', route: '../../components/dashboard/audio-affirmation', icon: 'musical-notes-outline' },
    { label: 'Your Journal', route: '../../components/dashboard/your-journal', icon: 'book-outline' },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#fff"} }>
      <CustomHeader title="Sabhav Dashboard" />

      <View style={styles.grid}>
        {buttons.map((btn, idx) => (
          <Pressable key={idx} style={styles.buttonWrapper} onPress={() => router.push(btn.route)}>
            <LinearGradient 
              colors={['#970dbd', '#FF6F61']} 
              start={{ x: 0, y: 0 }} 
              end={{ x: 1, y: 1 }} 
              style={styles.button}
            >
              <Ionicons name={btn.icon} size={32} color="#fff" />
              <Text style={styles.buttonText}>{btn.label}</Text>
            </LinearGradient>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  buttonWrapper: {
    width: '48%',
    aspectRatio: 1,
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
});
