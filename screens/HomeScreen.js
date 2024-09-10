import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const chatOptions = [
  { id: '1', name: 'DIRECTEUR' },
  { id: '2', name: 'SECRETARIAT' },
  { id: '3', name: 'COMPTABILITE' },
  { id: '4', name: 'INFORMATION' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={chatOptions}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Chat', { name: item.name })}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;
