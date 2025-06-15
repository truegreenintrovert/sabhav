import { Redirect, Stack } from 'expo-router';
import SplashScreenWrapper from "./components/SplashScreenWrapper";

export default function Rootayout() {
  return (
    <SplashScreenWrapper>
       <Stack screenOptions={{ headerShown: false }} />
      <Redirect href="/(tabs)/home" />
     
    </SplashScreenWrapper>
    
  );
}
