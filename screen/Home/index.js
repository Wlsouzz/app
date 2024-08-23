import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarsenha, setConfirmarsenha] = useState('');
  const navigation = useNavigation();

  const handleCadastro = () => {
    // Lógica para cadastrar usuário
    console.log('Cadastro realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.card}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry={true}
      />
       <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        value={confirmarsenha}
        onChangeText={(text) => setConfirmarsenha(text)}
        secureTextEntry={true}
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text style={styles.link}>Já tem uma conta?</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#007bff', // Azul
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
    width: 300, // Aumentei o tamanho do card
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#007bff', // Azul
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Cadastro;