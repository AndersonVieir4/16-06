import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

const MyShoppingApp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Autenticando o usuário...');
  };

  const handleForgotPassword = () => {
    console.log('Recuperando a senha do usuário...');
  };

  const handleCreateAccount = () => {
    console.log('Criando uma nova conta...');
  };

  const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#a09bce',
    },
    description: {
      fontSize: 16,
      marginBottom: 20,
      color: '#a09bce',
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      borderRadius: 8,
      backgroundColor: '#c0c0c0',    
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 10,
      color: '#a09bce',
    },
    textbutton: {
      marginRight: 10,
      color: 'black',
    },
    button: {
      marginRight: 10,
      color: 'black',
    },
    textbutton2: {
      marginRight: 10,
      color: 'white',
      flex: 1
    },
    button2: {
      marginRight: 10,
      color: 'black',
      backgroundColor: 'green',
      width: '80%',
      height: 50,
      borderRadius: 10,
      
    },
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Shopping</Text>
      <Text style={styles.description}>
        Monte uma lista de compra para te ajudar nas compras
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity  style={styles.button2} onPress={handleForgotPassword}>
      <text style={styles.textbutton2}>Recuperar senha</text>
    </TouchableOpacity>      
    <View style={styles.buttonContainer}>

      <TouchableOpacity  style={styles.button} onPress={handleForgotPassword}>
      <text style={styles.textbutton}>Recuperar senha</text>
    </TouchableOpacity>

    <TouchableOpacity  style={styles.button} onPress={handleCreateAccount}>
      <text style={styles.textbutton}>Criar minha conta</text>
    </TouchableOpacity>

          
      </View>
    </View>
  );
};

export default MyShoppingApp;
