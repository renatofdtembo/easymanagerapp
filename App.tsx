import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/route';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#122D70' barStyle='light-content' />
      <Routes />
    </NavigationContainer>
  );
}
