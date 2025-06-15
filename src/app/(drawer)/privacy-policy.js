import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function PrivacyPolicy() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Privacy & Policy</Text>
        <Text style={styles.bodyText}>
          Effective Date: [Insert Date]
        </Text>
        <Text style={styles.bodyText}>
          At Sabhav, your emotional well-being and privacy are our top priorities. 
          This Privacy Policy explains how we collect, use, and protect your personal data 
          when you use our app across web, Android, and iOS platforms.
        </Text>

        <Text style={styles.sectionTitle}>1. Information We Collect</Text>
        <Text style={styles.bodyText}>
          We collect minimal personal data necessary to provide you with a supportive experience:
          {"\n"}- Account details: email address or sign-in credentials
          {"\n"}- Optional profile information: name, avatar, preferences
          {"\n"}- Usage data: interactions with app features, anonymous analytics
          {"\n"}We do not collect sensitive personal content without your explicit consent.
        </Text>

        <Text style={styles.sectionTitle}>2. How We Use Your Data</Text>
        <Text style={styles.bodyText}>
          We use your data solely to:
          {"\n"}- Provide and improve emotional support features
          {"\n"}- Personalize your app experience
          {"\n"}- Ensure security and performance
          {"\n"}- Send essential notifications (if you opt in)
          {"\n"}We do not sell or rent your personal data.
        </Text>

        <Text style={styles.sectionTitle}>3. Data Protection and Security</Text>
        <Text style={styles.bodyText}>
          We use technical and organizational measures to protect your data, including:
          {"\n"}- End-to-end encryption for sensitive interactions
          {"\n"}- Secure cloud storage with strict access controls
          {"\n"}- Regular security audits
        </Text>

        <Text style={styles.sectionTitle}>4. Data Sharing</Text>
        <Text style={styles.bodyText}>
          We only share data:
          {"\n"}- When required by law or legal process
          {"\n"}- With trusted service providers who help us operate (bound by confidentiality)
        </Text>

        <Text style={styles.sectionTitle}>5. Your Rights</Text>
        <Text style={styles.bodyText}>
          You may:
          {"\n"}- Request access, correction, or deletion of your data
          {"\n"}- Withdraw consent at any time
          {"\n"}- Contact us at [your support email] for privacy-related concerns
        </Text>

        <Text style={styles.sectionTitle}>6. Jurisdiction</Text>
        <Text style={styles.bodyText}>
          This Privacy Policy is governed by and shall be construed in accordance 
          with the laws of India. In the event of any dispute, the courts located 
          at Bilaspur, Chhattisgarh (High Court jurisdiction) shall have exclusive jurisdiction.
        </Text>

        <Text style={styles.bodyText}>
          Sabhav is committed to safeguarding your privacy and ensuring your data is 
          handled responsibly and securely in compliance with Indian privacy laws.
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
