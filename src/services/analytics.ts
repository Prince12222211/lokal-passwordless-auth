import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "analytics_logs";

export const logEvent = async (event: string, email: string) => {
  const existing = await AsyncStorage.getItem(KEY);
  const logs = existing ? JSON.parse(existing) : [];

  logs.push({
    event,
    email,
    timestamp: new Date().toISOString(),
  });

  await AsyncStorage.setItem(KEY, JSON.stringify(logs));
};
