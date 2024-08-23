import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Lógica para logar usuário
    if (email === 'usuario@example.com' && senha === 'senha123') {
      console.log('Login realizado com sucesso!');
      navigation.navigate('Home');
    } else {
      console.log('Erro ao logar!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.card}>
        <TextInput
          style={[styles.input, email === '' ? null : styles.inputFocused]}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          onFocus={() => setEmail('')}
        />
        <TextInput
          style={[styles.input, senha === '' ? null : styles.inputFocused]}
          placeholder="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry={true}
          onFocus={() => setSenha('')}
        />
        <Button
          title="Logar"
          onPress={handleLogin}
          style={styles.button}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.link}>Não tem uma conta?</Text>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#007bff', // Azul
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  inputFocused: {
    borderColor: '#007bff', // Azul
  },
  button: {
    borderRadius: 10, // Adicionei essa linha para arredondar o botão
    backgroundColor: '#007bff', // Azul
    padding: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Login;