import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Animated,
  TextInputProps,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import { colors } from './colors';

interface InputFloatingProps extends TextInputProps {
  label: string;
  error?: string;
  required?: boolean;
}

const InputFloating: React.FC<InputFloatingProps> = ({
  label,
  error,
  required,
  value,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const animatedLabel = useRef(new Animated.Value(value ? 1 : 0)).current;

  // Atualiza a animação da label com base no foco e valor
  useEffect(() => {
    Animated.timing(animatedLabel, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const labelStyle = {
    position: 'absolute' as const,
    left: 4,
    top: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [26, 6], // Melhor correção para evitar o erro de tipo
    }),
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], // Tamanho da fonte com animação
    }),
    color: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.gray, colors.text], // Cor da label animada
    }),
    backgroundColor: colors.white, // Cor de fundo para a label flutuante
    paddingHorizontal: 4,
    zIndex: 2,
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TouchableWithoutFeedback onPress={focusInput}>
          <Animated.Text style={labelStyle}>
            {label}
            {required && <Text style={{ color: colors.error }}> *</Text>}
          </Animated.Text>
        </TouchableWithoutFeedback>

        <TextInput
          ref={inputRef}
          {...props}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={[styles.input, error ? styles.inputError : {}]}
          placeholder=""
          placeholderTextColor={colors.gray}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    width: '100%',
  },
  inputWrapper: {
    position: 'relative',
    paddingTop: 15, // Para garantir que a label flutue sem problemas
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 5,
    fontSize: 17,
    color: colors.text,
    backgroundColor: colors.white,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  inputError: {
    borderColor: colors.error, // Bordas vermelhas no erro
  },
  errorText: {
    color: colors.error,
    fontSize: 12,
    marginTop: 4,
  },
});

export default InputFloating;
