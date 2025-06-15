import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export default function CustomHeader({ title = 'Dashboard', showDrawer = false }) {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      {showDrawer ? (
        <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={styles.menuButton}>
          <Ionicons name="menu" size={28} color="#970dbd" />
        </Pressable>
      ) : (
        <View style={styles.menuButton} />  // No string inside
      )}

      <Text style={styles.headerText}>{title}</Text>

      <View style={styles.rightSpace} />  // No string inside
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  menuButton: {
    width: 40,
    alignItems: 'flex-start',
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#970dbd',
  },
  rightSpace: {
    width: 40,
  },
});
