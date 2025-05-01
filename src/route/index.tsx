//import liraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Welcome from '../page/welcome';
import SignIn from '../page/signin';

export type RootStackParamList = {
    Welcome: undefined;
    SignIn: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// create a component
const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
        </Stack.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Routes;
