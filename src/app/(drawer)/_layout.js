import { Drawer } from 'expo-router/drawer';
import CustomDrawer from './../components/CustomDrawer'; // Adjust path as needed

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false

      }}
      drawerContent={() => <CustomDrawer />}
    >
      <Drawer.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          title: "Settings",
        }}
      />
      <Drawer.Screen
        name="help"
        options={{
          title: "Help",
        }}
      />
      <Drawer.Screen
          name="terms-and-conditions"
          options={{
           title: 'Terms & Conditions',
            }} 
            />
      <Drawer.Screen
        name="privacy-policy" 
         options={{
         title: 'Privacy & Policy',
          }} 
          />
      <Drawer.Screen
        name="logout"
        options={{
          title: "Logout",
        }}
      />

    
    </Drawer>
  );
}
