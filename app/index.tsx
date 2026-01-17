import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Blurred background */}
      <ImageBackground
        source={require("../assets/images/main-bg.png")}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        blurRadius={30}
      />

      {/* Dark overlay */}
      <View style={styles.overlay} />

      {/* Sharp foreground */}
      <ImageBackground
        source={require("../assets/images/main-bg.png")}
        style={styles.foreground}
        resizeMode="contain"
      >
        {/* Gradient Border Wrapper */}
        <LinearGradient
          colors={["#fc832c", "#ffb358"]}
          style={styles.gradientBorder}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.replace("/menu")}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>PLAY</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    overflow: "hidden",

  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.55)",
  },
  foreground: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",

  },

  /** Gradient border */
  gradientBorder: {
    marginTop: 40,
    padding: 5, // border thickness
    borderRadius: 34,
    top:10
  },

  /** Actual button */
  button: {
    backgroundColor: "#d00203",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "900",
  },
});
