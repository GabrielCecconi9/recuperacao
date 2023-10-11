// ListaJogadoresScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const ListaJogadoresScreen = () => {
  const footballPlayers = [
    {
    name: "Cristiano Ronaldo",
    position: "Forward",
    age: 36,
    },
    {
    name: "Lionel Messi",
    position: "Attacking Midfielder",
    age: 34,
    },
    {
    name: "Neymar Jr.",
    position: "Forward",
    age: 29,
    },
    {
    name: "Kylian Mbappé",
    position: "Forward",
    age: 23,
    },
    {
    name: "Sergio Ramos",
    position: "Defender",
    age: 35,
    },
    {
    name: "Kevin De Bruyne",
    position: "Midfielder",
    age: 30,
    },
    {
    name: "Robert Lewandowski",
    position: "Forward",
    age: 32,
    },
    {
    name: "Virgil van Dijk",
    position: "Defender",
    age: 30,
    },
    {
    name: "Luka Modric",
    position: "Midfielder",
    age: 35,
    },
    {
    name: "Erling Haaland",
    position: "Forward",
    age: 21,
    },
    ];
    
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Lista de Jogadores:</Text>
      <FlatList
        data={footballPlayers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>Nome: {item.name}</Text>
            <Text>Posição: {item.position}</Text>
            <Text>Idade: {item.age}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListaJogadoresScreen;
