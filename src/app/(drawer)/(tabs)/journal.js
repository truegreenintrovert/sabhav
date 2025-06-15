// src/app/drawer/tabs/journal.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import CustomHeader from '../../components/CustomHeader';

const moods = [
  { icon: "happy-outline", label: "Happy" },
  { icon: "sad-outline", label: "Sad" },
  { icon: "partly-sunny-outline", label: "Okay" },
];

export default function Journal() {
  const [entry, setEntry] = useState("");
  const [mood, setMood] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeader title="Journal" />
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#970dbd" }}>
          Today's Journal
        </Text>
        <TextInput
          placeholder="Write about your day..."
          placeholderTextColor="#aaa"
          multiline
          style={{
            borderWidth: 1,
            borderColor: "#970dbd",
            borderRadius: 12,
            marginTop: 16,
            padding: 12,
            minHeight: 100,
            fontSize: 16,
          }}
          value={entry}
          onChangeText={setEntry}
        />

        <Text style={{ marginTop: 24, marginBottom: 12, fontWeight: "bold", color: "#970dbd" }}>
          Your Mood:
        </Text>
        <View style={{ flexDirection: "row", gap: 24 }}>
          {moods.map((m) => (
            <TouchableOpacity
              key={m.label}
              onPress={() => setMood(m.label)}
              style={{
                alignItems: "center",
                padding: 8,
                borderRadius: 12,
                backgroundColor: mood === m.label ? "#f7e6fa" : "transparent",
              }}
            >
              <Ionicons
                name={m.icon}
                size={36}
                color={mood === m.label ? "#970dbd" : "#bbb"}
              />
              <Text style={{ color: mood === m.label ? "#970dbd" : "#888" }}>{m.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* You can add a Save button or auto-save here */}
      </View>
    </SafeAreaView>
  );
}
