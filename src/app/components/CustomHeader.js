import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function CustomHeader({ title = "सभाव" }) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#eee',
        elevation: 2,
      }}
    >
      {/* Drawer Hamburger */}
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Ionicons name="menu" size={28} color="#970dbd" />
      </TouchableOpacity>
      {/* Title */}
      <Text style={{ fontSize: 20, color: '#970dbd', fontWeight: 'bold' }}>{title}</Text>
      {/* Right space (for symmetry or future actions) */}
      <View style={{ width: 28 }} />
    </View>
  );
}
