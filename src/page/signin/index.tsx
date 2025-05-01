import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ReactAnimation from 'react-native-animatable';
import InputFloating from '../../components/InputFloating';
import { RootStackParamList } from '../../route';

type SignInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>;

const SignIn = () => {
  const navigation = useNavigation<SignInScreenNavigationProp>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    try {
      // Simular um login bem-sucedido
      setLoading(true);
      setError('');
      setTimeout(() => {
        // navigation.navigate('Home');
      }, 1000); // Simula o tempo de login
    } catch (err: any) {
      setError('Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <ReactAnimation.View delay={700} animation="fadeInLeft" style={styles.containerHeader}>
          <Text style={styles.message}>Bem Vindo(a)</Text>
        </ReactAnimation.View>

        <ReactAnimation.View delay={700} animation="fadeInUp" style={styles.containerInput}>
            <View style={{
                    width: "100%",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: -100
                }}>
                <Image 
                    source={require("../../assets/logorect.png")}
                    style={{width: "100%", borderRadius: 50}}
                    resizeMode='contain'
                />   
            </View>
            <View style={{
                    width: "100%",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: -100
                }}>
                  
                <InputFloating
                    label="Digite seu usuário"
                    value={username}
                    onChangeText={(text) => {
                    setUsername(text);
                    setError('');
                    }}
                    autoCapitalize="none"
                    editable={!loading}
                />
                <InputFloating
                    label="Digite sua senha"
                    value={password}
                    onChangeText={(text) => {
                    setPassword(text);
                    setError('');
                    }}
                    autoCapitalize="none"
                    editable={!loading}
                    secureTextEntry
                />

                {error && <Text style={styles.errorText}>{error}</Text>}
            </View>

          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => {
              // TODO: Implement forgot password
            }}
            disabled={loading}
          >
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.loginButton, loading ? styles.loginButtonDisabled : null]}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.loginButtonText}>Entrar</Text>
            )}
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.createuser}
            onPress={() => {
              // TODO: Implement forgot password
            }}
            disabled={loading}
          >
            <Text style={styles.createuser}>Não tem uma conta? Cria uma aqui.</Text>
          </TouchableOpacity>

            <View style={styles.loginWith}>
                 
            </View>
        </ReactAnimation.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122D70',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  containerHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  message: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  containerInput: {
    backgroundColor: '#fff',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 30,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  errorText: {
    color: '#ff3b30',
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '600',
  },createuser:{
    alignSelf: 'center',
    marginTop: 20,
    color: "#A1A1A1"
  },
  loginButton: {
    backgroundColor: '#007AFF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  loginButtonDisabled: {
    backgroundColor: '#ccc',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },loginWith:{
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SignIn;
