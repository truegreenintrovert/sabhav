import React from "react";
import { View, Text, Pressable, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const TAB_CONFIG = {
  home: { icon: "home-outline", label: "Home" },
  chat: { icon: "chatbubbles-outline", label: "Chat" },
  journal: { icon: "book-outline", label: "Journal" },
  dashboard: { icon: "grid-outline", label: "Dashboard" },
};

export default function MyTabBar({ state, descriptors, navigation }) {
  return (
    <SafeAreaView edges={["bottom"]} style={{ backgroundColor: "transparent" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 16,
          marginBottom: 12,
          backgroundColor: "#fff",
          borderRadius: 32,
          paddingHorizontal: 18,
          paddingVertical: Platform.OS === "ios" ? 18 : 14,
          borderWidth: 1,
          borderColor: "#f3e1fa",
        }}
      >
        {state.routes.map((route, index) => {
          const focused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              style={({ pressed }) => ({
                flex: 1,
                flexDirection: "column", // icon above label
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 8,
                borderRadius: 22,
                marginHorizontal: 6,
                backgroundColor: focused
                  ? "#f7e6fa"
                  : pressed
                  ? "#fde8fa"
                  : "transparent",
                transform: [
                  {
                    scale: focused ? 1.12 : pressed ? 1.06 : 1,
                  },
                ],
              })}
            >
              <Ionicons
                name={TAB_CONFIG[route.name]?.icon ?? "ellipse-outline"}
                size={28}
                color={focused ? "#970dbd" : "#bbb"}
                style={{
                  marginBottom: 3,
                }}
              />
              <Text
                style={{
                  color: focused ? "#970dbd" : "#888",
                  fontWeight: focused ? "bold" : "600",
                  letterSpacing: focused ? 0.4 : 0.2,
                  fontSize: focused ? 15 : 13,
                  marginTop: 2,
                  textAlign: "center",
                  width: "100%",
                }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {TAB_CONFIG[route.name]?.label ?? route.name}
              </Text>
              {/* Optional: active dot below icon */}
              {focused && (
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "#ed5496", // coral-red accent
                    marginTop: 4,
                  }}
                />
              )}
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
