import { View, Text, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HelpScreen() {
  const helpTopics = [
    {
      question: "How do I use daily check-ins?",
      answer: "Tap the Home or Dashboard tab and follow the prompts to log your mood or thoughts every day.",
    },
    {
      question: "How do I edit my profile?",
      answer: "Go to the Profile tab in the drawer menu and tap 'Edit'.",
    },
    {
      question: "How can I reset my password?",
      answer: "Go to Settings > Account, then choose 'Reset Password'. Follow the on-screen instructions.",
    },
    {
      question: "Need more help?",
      answer: "Contact our support team any time!",
    },
  ];

  const contactSupport = () => {
    // This will open the user's default email app (customize address as needed)
    Linking.openURL('mailto:support@sabhav.com?subject=Need Help with Sabhav App');
  };

  return (
    <SafeAreaView>
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#faf7fb" }}>
      <View style={{ padding: 24, alignItems: 'center', backgroundColor: "#970dbd" }}>
        <Ionicons name="help-circle-outline" size={56} color="#fff" style={{ marginBottom: 8 }} />
        <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#fff', marginBottom: 8 }}>Help & Support</Text>
        <Text style={{ color: "#f3e1fc", marginBottom: 8 }}>How can we assist you?</Text>
      </View>

      <View style={{ padding: 24 }}>
        {helpTopics.map((topic, idx) => (
          <View key={idx} style={{ marginBottom: 22 }}>
            <Text style={{ fontSize: 16, color: "#970dbd", fontWeight: 'bold', marginBottom: 6 }}>{topic.question}</Text>
            <Text style={{ fontSize: 15, color: "#333" }}>{topic.answer}</Text>
          </View>
        ))}

        <TouchableOpacity
          onPress={contactSupport}
          style={{
            marginTop: 20,
            backgroundColor: "#970dbd",
            borderRadius: 8,
            paddingVertical: 14,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Ionicons name="mail-outline" size={22} color="#fff" style={{ marginRight: 8 }} />
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: '600' }}>Contact Support</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}
