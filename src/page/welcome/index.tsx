//import liraries
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as ReactAnimation from 'react-native-animatable';
import { RootStackParamList } from '../../route';
import { StackNavigationProp } from '@react-navigation/stack';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;
// create a component
const Welcome = () => {

    const navigation = useNavigation<WelcomeScreenNavigationProp>();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <ReactAnimation.Image 
                animation="flipInY"
                    source={require("../../assets/logo4-rt.png")}
                    style={{width: "100%"}}
                    resizeMode='contain'
                />   
            </View>
            <ReactAnimation.View delay={700} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Simplificando o seu Trabalho</Text>   
                <Text style={styles.text}>Faça Login Para Começar</Text> 

                <TouchableOpacity style={styles.button} onPress={() => navigation.replace('SignIn')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>   
            </ReactAnimation.View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#122D70',
        flex: 1
    }, containerLogo:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    }, containerForm: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    }, title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    }, text: {
        fontSize: 18,
        color: '#A1A1A1',
    }, button: {
        width: '80%',
        marginTop: 20,
        backgroundColor: '#122D70',
        padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'
    }, buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }
});

//make this component available to the app
export default Welcome;
