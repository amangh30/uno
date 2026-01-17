import { Audio } from "expo-av";

let sound: Audio.Sound | null = null;

export async function playMenuMusic() {
  if (sound) return;

  const { sound: newSound } = await Audio.Sound.createAsync(
    require("../../assets/audio/menu.mp3"),
    {
      shouldPlay: true,
      isLooping: true,
      volume: 0.6,
    }
  );

  sound = newSound;
}

export async function stopMenuMusic() {
  if (!sound) return;

  await sound.stopAsync();
  await sound.unloadAsync();
  sound = null;
}
