import React from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useSegments } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';

const BRAND_PURPLE = "#970dbd";
const INACTIVE_TEXT = "#333";
const INACTIVE_ICON = "#bbb";
const ACTIVE_BG = "#f7e6fa";
const HEADER_BG = "#970dbd";

const DRAWER_ITEMS = [
  { name: "profile", label: "Profile", icon: "person-outline" },
  { name: "settings", label: "Settings", icon: "settings-outline" },
  { name: "terms-and-conditions", label: "Terms & Conditions", icon: "document-text-outline" },
  { name: "privacy-policy", label: "Privacy & Policy", icon: "shield-checkmark-outline" },
  { name: "help", label: "Help", icon: "help-circle-outline" },
  { name: "logout", label: "Logout", icon: "exit-outline" },
];

export default function CustomDrawer() {
  const router = useRouter();
  const segments = useSegments();
  const activeRoute = segments[segments.length - 1];

  return (
    <SafeAreaView
      edges={["top", "left", "right", "bottom"]}
      style={{ flex: 1, backgroundColor: "#faf7fb" }}
     >
      {/* Drawer Header */}
     <LinearGradient
       colors={['#970dbd', '#FF6F61']}  // Purple to coral-red
       start={{ x: 0, y: 0 }}
       end={{ x: 1, y: 1 }}
      style={{
    paddingVertical: 32,
    marginTop: 8,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    marginHorizontal: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
  }}
>
        <Text style={{ fontSize: 28, fontWeight: "bold", color: "#fff", letterSpacing: 2 }}>
          सभाव
        </Text>
        <Text style={{ color: "#fff", opacity: 0.85, marginTop: 4, fontSize: 14 }}>
          Your Eternal Companion
        </Text>
    </LinearGradient>

      {/* Divider */}
      <View
        style={{
          height: 1,
          backgroundColor: "#e6d3ef",
          marginVertical: 12,
          marginHorizontal: 16,
        }}
      />

      {/* Drawer Items */}
      <View style={{flex: 1, flexDirection: "column",alignItems: "left", width: "100%",paddingHorizontal: 12 }}>
        {DRAWER_ITEMS.map((item) => {
          const focused = activeRoute === item.name;
          return (
          <Pressable
  key={item.name}
  onPress={() => router.replace(`/(drawer)/${item.name}`)}
  style={({ pressed }) => ({
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start", // force start
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginVertical: 5,
    elevation: 4,
    borderRadius: 18,
    backgroundColor: focused
      ? ACTIVE_BG
      : pressed
      ? "#fde8fa"
      : "transparent",
    minHeight: 48,
  
  })}
>
  <Ionicons
    name={item.icon}
    size={26}
    color={focused ? BRAND_PURPLE : INACTIVE_ICON}
    style={{
      marginRight: 12,
      width: 32,
      alignItems: "center",
      transform: [{ scale: focused ? 1.18 : 1 }]
      // no minWidth, no textAlign, no wrapping view!
    }}
  />
  <Text
    style={{
      color: focused ? BRAND_PURPLE : INACTIVE_TEXT,
      fontWeight: focused ? "bold" : "600",
      fontSize: 16,
      flexGrow: 1,
      letterSpacing: 0.2,
    
      // Remove flex: 1 if you want tight labels, or add flex: 1, minWidth: 0 for long labels
    }}
    numberOfLines={1}
    ellipsizeMode="tail"
  >
    {item.label}
  </Text>
 </Pressable>
          );
        })}
      </View>

      {/* Footer */}
      <View style={{ marginTop: "auto", alignItems: "center", padding: 16 }}>
        <Text style={{ color: "#b4b4b4", fontSize: 13 }}>
          Made with <Text style={{ color: "#ed5496" }}>❤️</Text> by Fruitenium
        </Text>
      </View>
    </SafeAreaView>
  );
}
