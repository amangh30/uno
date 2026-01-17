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
        <View style={styles.content}>

          {/* CREATE ROOM */}
          <LinearGradient
            colors={["#ff9a3c", "#ff5f00"]}
            style={styles.gradientBorder}
          >
            <TouchableOpacity
              style={styles.primaryButton}
              activeOpacity={0.85}
              onPress={() => router.push("/")}
            >
              <Text style={styles.primaryText}>CREATE ROOM</Text>
            </TouchableOpacity>
          </LinearGradient>

          {/* JOIN ROOM */}
          <TouchableOpacity
            style={styles.secondaryButton}
            activeOpacity={0.85}
            onPress={() => router.push("/")}
          >
            <Text style={styles.secondaryText}>JOIN ROOM</Text>
          </TouchableOpacity>
        </View>
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
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
    top:100
  },

  title: {
    fontSize: 54,
    fontWeight: "900",
    color: "#ffb000",
    marginBottom: 60,
    textShadowColor: "#ff4500",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 10,
  },

  gradientBorder: {
    padding: 4,
    borderRadius: 34,
    marginBottom: 24,
  },

  primaryButton: {
    backgroundColor: "#d00203",
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 30,
  },

  primaryText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    letterSpacing: 1,
  },

  secondaryButton: {
    backgroundColor: "#2a2a2a",
    paddingVertical: 18,
    paddingHorizontal: 58,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#555",
  },

  secondaryText: {
    color: "#e0e0e0",
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 1,
  },
});