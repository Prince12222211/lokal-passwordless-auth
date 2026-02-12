import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSessionTimer } from "../hooks/useSessionTimer";
import { logEvent } from "../services/analytics";

export default function SessionScreen({ route, navigation }: any) {
  const { email } = route.params;
  const duration = useSessionTimer();

  const handleLogout = async () => {
    await logEvent("LOGOUT", email);
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Session Active 🟢</Text>
        <Text style={styles.timer}>{duration}</Text>

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 18,
    alignItems: "center",
    elevation: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },
  timer: {
    fontSize: 36,
    fontWeight: "700",
    color: "#4F46E5",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#EF4444",
    padding: 14,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
