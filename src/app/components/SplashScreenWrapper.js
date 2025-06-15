import { useEffect, useMemo, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import * as SplashScreen from "expo-splash-screen";

// Instruct SplashScreen not to auto-hide
SplashScreen.preventAutoHideAsync().catch(() => {});

export default function SplashScreenWrapper({ children }) {
  const [isAppReady, setAppReady] = useState(false);
  const animation = useMemo(() => new Animated.Value(1), []);

  // Always show the app after 2 seconds
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        await SplashScreen.hideAsync();
      } catch {}
      setAppReady(true);
      Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isAppReady && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: Constants.expoConfig.splash.backgroundColor,
              opacity: animation,
            },
          ]}
        />
      )}
    </View>
  );
}
