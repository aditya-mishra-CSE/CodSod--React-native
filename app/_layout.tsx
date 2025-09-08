import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions= {{ headerShown: false}}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="Login"/>
        <Stack.Screen name="SignUp"/>
      </Stack>
      <StatusBar backgroundColor="white" style="dark"/>
    </>
  );
};
