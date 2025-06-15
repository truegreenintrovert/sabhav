// src/app/drawer/tabs/chat.js
import React, { useState, useRef } from "react";
import { View, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, Text, ActivityIndicator, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import CustomHeader from "../../components/CustomHeader";
import { fetchChatReply } from "../../../../lib/api/openai";

const MAX_WORDS = 40; // Max words per user message
const MAX_LENGTH = 200; // Max characters per message

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: "1", sender: "bot", text: "Hi buddy !" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const flatListRef = useRef();

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    // Word count check
    const wordCount = input.trim().split(/\s+/).length;
    if (wordCount > MAX_WORDS) {
      Alert.alert(
        "Message too long",
        `Please keep your message under ${MAX_WORDS} words.`
      );
      return;
    }

    const userMsg = { id: Date.now().toString(), sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const reply = await fetchChatReply([...messages, userMsg]);
      const botMsg = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: reply,
      };
      setMessages((prev) => [...prev, botMsg]);
      flatListRef.current?.scrollToEnd({ animated: true });
    } catch (err) {
      Alert.alert("Bot Error", "Sorry, I couldn't get a reply.");
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        alignSelf: item.sender === "user" ? "flex-end" : "flex-start",
        backgroundColor: item.sender === "user" ? "#970dbd" : "#f3f3f7",
        marginVertical: 6,
        padding: 12,
        borderRadius: 18,
        maxWidth: "80%",
      }}
    >
      <Text
        style={{
          color: item.sender === "user" ? "#fff" : "#222",
          fontSize: 16,
        }}
      >
        {item.text}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeader title="Sabhav Chat" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80}
      >
        <View style={{ flex: 1, padding: 14 }}>
          <FlatList
            ref={flatListRef}
            data={messages}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 80 }}
            onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderTopWidth: 1,
            borderColor: "#eee",
            backgroundColor: "#fff",
          }}
        >
          <TextInput
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: "#970dbd",
              borderRadius: 24,
              paddingVertical: 8,
              paddingHorizontal: 16,
              marginRight: 10,
              fontSize: 16,
              backgroundColor: "#faf7fb",
            }}
            placeholder="Type your message..."
            placeholderTextColor="#aaa"
            value={input}
            onChangeText={setInput}
            onSubmitEditing={sendMessage}
            maxLength={MAX_LENGTH} // Max 200 chars
            returnKeyType="send"
            editable={!loading}
          />
          <TouchableOpacity
            onPress={sendMessage}
            style={{
              backgroundColor: loading ? "#ccc" : "#970dbd",
              borderRadius: 20,
              padding: 10,
            }}
            activeOpacity={input.trim() && !loading ? 0.7 : 1}
            disabled={!input.trim() || loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" size="small" />
            ) : (
              <Ionicons name="send" size={22} color="#fff" />
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
