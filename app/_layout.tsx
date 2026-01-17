import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from "react";
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { playMenuMusic } from "@/src/audio/backgroundMusic";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    playMenuMusic();
  }, []);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="menu" />
      </Stack>
      <StatusBar hidden />
    </ThemeProvider>
  );
}
