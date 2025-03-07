import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Landingpage" options={{
        headerShown: false,
      }} />

      <Stack.Screen name="(auth)/Login" options={{
        headerShown: false,
      }} />
      <Stack.Screen name="(tabs)/Home" options={{
        headerShown: false,
      }} />
      <Stack.Screen name="(auth)/Signup" options={{
        headerShown: false,
      }} />

    </Stack>


  );
}
