import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import ListaJogadoresScreen from './telaA'; 
import { StyleSheet } from 'react-native';

const CadastroTecnicoScreen = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [tecnicoCadastrado, setTecnicoCadastrado] = useState({
    nome,
    idade,
    nacionalidade,
    experiencia
  });

  const cadastrarTecnico = () => {
    
    const tecnico = {
      nome,
      idade,
      nacionalidade,
      experiencia
    };
    setTecnicoCadastrado(tecnico);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
      />
      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Nacionalidade"
        value={nacionalidade}
        onChangeText={setNacionalidade}
      />
      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Experiência (em anos)"
        value={experiencia}
        onChangeText={setExperiencia}
      />

      <Button title="Cadastrar" onPress={cadastrarTecnico} />

      <link rel="stylesheet" href="" />

      {tecnicoCadastrado && (
        <View style={{ marginTop: 20 }}>
          <Text>Dados do Técnico Cadastrado:</Text>
          <Text>Nome : {tecnicoCadastrado.nome}</Text>
          <Text>Idade:  {tecnicoCadastrado.idade}</Text>
          <Text>Nacionalidade: {tecnicoCadastrado.nacionalidade}</Text>
          <Text>Experiência: {tecnicoCadastrado.experiencia} anos</Text>
        </View>
      )}

     
    </View>
    
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'black',
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
  },
  cadastroInfo: {
    marginTop: 20,
  },
});

export default CadastroTecnicoScreen;

