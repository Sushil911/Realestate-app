import { Link } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [count, setcount] = useState(0)
  return (
    <View className="flex-1 justify-center items-center mb-4">
      <Text className="text-lg font-bold">Welcome to Restate</Text>
      <Link href="/sign-in">Sign-in</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
    </View>
  );
}
