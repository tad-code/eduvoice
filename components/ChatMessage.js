import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatMessage = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default ChatMessage;
