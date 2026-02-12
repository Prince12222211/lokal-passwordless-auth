import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { validateOtp, generateOtp } from "../services/otpManager";
import { logEvent } from "../services/analytics";

export default function OtpScreen({ route, navigation }: any) {
  const { email } = route.params;
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [error, setError] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleValidate = async () => {
    const result = validateOtp(email, otp);

    if (result.success) {
      await logEvent("OTP_SUCCESS", email);
      navigation.replace("Session", { email });
    } else {
      await logEvent("OTP_FAILURE", email);
      setError(result.reason);
    }
  };

  const handleResend = async () => {
    const newOtp = generateOtp(email);
    console.log("Resent OTP:", newOtp);

    setOtp("");
    setError("");
    setTimeLeft(60);

    await logEvent("OTP_GENERATED", email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Verify OTP 🔐</Text>
        {/* <Text style={styles.subtitle}>Sent to {email}</Text> */}

        <TextInput
          value={otp}
          onChangeText={setOtp}
          keyboardType="numeric"
          maxLength={6}
          style={styles.otpInput}
        />

        <Text style={[
          styles.timer,
          { color: timeLeft === 0 ? "#EF4444" : "#6B7280" }
        ]}>
          {timeLeft === 0
            ? "OTP Expired"
            : `Expires in ${timeLeft}s`}
        </Text>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity
          style={[styles.button, otp.length !== 6 && styles.disabled]}
          onPress={handleValidate}
          disabled={otp.length !== 6}
        >
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleResend}>
          <Text style={styles.resend}>Resend OTP</Text>
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
    padding: 25,
    borderRadius: 18,
    elevation: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 6,
  },
  subtitle: {
    color: "#6B7280",
    marginBottom: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    padding: 16,
    borderRadius: 12,
    fontSize: 22,
    textAlign: "center",
    letterSpacing: 8,
    marginBottom: 12,
  },
  timer: {
    marginBottom: 8,
  },
  error: {
    color: "#EF4444",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#4F46E5",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  disabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  resend: {
    marginTop: 16,
    textAlign: "center",
    color: "#4F46E5",
  },
});
