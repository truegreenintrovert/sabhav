import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import CustomHeader from '../../components/CustomHeader';

export default function HomeTab() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeader title="Home" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Tab Content</Text>
      </View>
    </SafeAreaView>
  );
}

