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
      <Stack
        screenOptions={{
          headerShown: false,    

          animation: "fade",
          animationDuration: 250,

          contentStyle: {
            backgroundColor: "black",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{ animation: "fade", animationDuration: 300 }}
        />

        <Stack.Screen
          name="menu"
          options={{ animation: "slide_from_left", gestureEnabled: false, animationDuration: 500 }}
        />
      </Stack>

      <StatusBar hidden />
    </ThemeProvider>
  );
}
