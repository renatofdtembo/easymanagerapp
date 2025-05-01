import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { OptionsSelect } from './classes';

type SelectProps = {
  options: OptionsSelect[];
  value?: string | number;
  placeholder?: string;
  onChange: (value: string | number) => void;
  label?: string;
  error?: string;
  disabled?: boolean;
  style?: any;
};

const Select: React.FC<SelectProps> = ({
  options,
  value,
  placeholder = 'Selecione uma opção',
  onChange,
  label,
  error,
  disabled = false,
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionsSelect>(new OptionsSelect(null, null, null));
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const heightAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (value) {
      const option = options.find((opt: any) => opt.value === value);
      if (option) {
        setSelectedOption(option);
      }
    }
  }, [value, options]);

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isOpen ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(heightAnim, {
      toValue: isOpen ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isOpen]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const maxHeight = heightAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });

  const handleSelect = (option: any) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity
        style={[
          styles.select,
          error && styles.error,
          disabled && styles.disabled,
        ]}
        onPress={() => !disabled && setIsOpen(!isOpen)}
        activeOpacity={0.7}
      >
        <Text style={[
          styles.selectedText,
          !selectedOption && styles.placeholder,
        ]}>
          {selectedOption ? selectedOption.label : placeholder}
        </Text>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#666" />
        </Animated.View>
      </TouchableOpacity>

      <Animated.View style={[styles.optionsContainer, { maxHeight }]}>
        <ScrollView
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
        >
          {options.map((option) => (
            <TouchableOpacity
              key={option.value.toString()}
              style={[
                styles.option,
                selectedOption?.value === option.value && styles.selectedOption,
              ]}
              onPress={() => handleSelect(option)}
            >
              <Text style={[
                styles.optionText,
                selectedOption?.value === option.value && styles.selectedOptionText,
              ]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 0,
    fontWeight: '500',
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    minHeight: 35,
  },
  selectedText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  placeholder: {
    color: '#999',
  },
  optionsContainer: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 4,
    zIndex: 1000,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  scrollView: {
    maxHeight: 200,
  },
  option: {
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  selectedOption: {
    backgroundColor: '#f5f5f5',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOptionText: {
    color: '#007AFF',
    fontWeight: '500',
  },
  error: {
    borderColor: '#ff3b30',
  },
  errorText: {
    color: '#ff3b30',
    fontSize: 12,
    marginTop: 4,
  },
  disabled: {
    backgroundColor: '#f5f5f5',
    opacity: 0.7,
  },
});

export default Select; 