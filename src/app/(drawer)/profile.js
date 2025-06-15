import { useNavigation, DrawerActions } from '@react-navigation/native';
import { View, Button } from 'react-native';

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open Drawer" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
    </View>
  );
}
