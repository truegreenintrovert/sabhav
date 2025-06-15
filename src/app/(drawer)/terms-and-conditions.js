import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function TermsAndConditions() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Terms & Conditions</Text>

        <Text style={styles.bodyText}>
          Effective Date: 16-06-2025
        </Text>

        <Text style={styles.bodyText}>
          Welcome to Sabhav. By using our app (web, Android, or iOS), you agree to the following terms and conditions. Please read them carefully.
        </Text>

        <Text style={styles.sectionTitle}>1. Use of the App</Text>
        <Text style={styles.bodyText}>
          - Sabhav is intended to provide emotional support and wellness features.{"\n"}
          - You agree to use the app responsibly and not for any unlawful or harmful purpose.{"\n"}
          - You must be at least 13 years of age, or have parental consent if required by law.
        </Text>

        <Text style={styles.sectionTitle}>2. User Account</Text>
        <Text style={styles.bodyText}>
          - You are responsible for keeping your account credentials secure.{"\n"}
          - You must not share your account or impersonate others.
        </Text>

        <Text style={styles.sectionTitle}>3. Content</Text>
        <Text style={styles.bodyText}>
          - Any content or insights provided in the app are for emotional well-being and general information, not medical or psychiatric advice.{"\n"}
          - Sabhav is not a substitute for professional mental health care.
        </Text>

        <Text style={styles.sectionTitle}>4. Limitation of Liability</Text>
        <Text style={styles.bodyText}>
          - Sabhav provides the app on an "as is" basis without warranties of any kind.{"\n"}
          - We are not liable for any damages arising from your use of the app.
        </Text>

        <Text style={styles.sectionTitle}>5. Modifications</Text>
        <Text style={styles.bodyText}>
          - We may update these terms from time to time. Continued use of Sabhav means you accept the revised terms.
        </Text>

        <Text style={styles.sectionTitle}>6. Jurisdiction</Text>
        <Text style={styles.bodyText}>
          - These Terms & Conditions are governed by the laws of India.{"\n"}
          - Any disputes will fall under the exclusive jurisdiction of the courts located at Bilaspur, Chhattisgarh (High Court jurisdiction).
        </Text>

        <Text style={styles.sectionTitle}>7. Contact</Text>
        <Text style={styles.bodyText}>
          If you have questions, contact us at support@sabhav.in
        </Text>

        <Text style={styles.bodyText}>
          Please also review our Privacy Policy to understand how we handle your data.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 16 },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#970dbd',
    textAlign: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#970dbd',
    marginTop: 16,
    marginBottom: 4,
  },
  bodyText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    marginBottom: 8,
  },
});
