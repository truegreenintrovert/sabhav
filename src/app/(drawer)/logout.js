import { useEffect } from "react";
import { Redirect } from "expo-router";

export default function Logout() {
  useEffect(() => {
    // Clear tokens, user session, etc. here
  }, []);

  return <Redirect href="/(auth)/login" />;
}
