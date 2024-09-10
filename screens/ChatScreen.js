import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const ChatScreen = ({ route }) => {
  const { name } = route.params;
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('chats')
      .doc(name)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      });

    return unsubscribe;
  }, [name]);

  const sendMessage = () => {
    firestore()
      .collection('chats')
      .doc(name)
      .collection('messages')
      .add({
        text: input,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
    setInput('');
  };

  return (
    <View>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <TextInput value={input} onChangeText={setInput} />
      <Button title="Envoyer" onPress={sendMessage} />
    </View>
  );
};

export default ChatScreen;
