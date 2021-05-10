import React, {useState} from "react";
import {KeyboardAvoidingView, StyleSheet, Text, View} from "react-native";
import {Button, Input, Image} from "react-native-elements";
import {StatusBar} from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';


const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

// sign in function with on PRess from the button
    const signIn = ({ navigation }) => {

    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            {/* all that battery icons and so on*/}
            <StatusBar style="light" />
            {/* image file*/}
            <Image source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png",
            }}
            style={{width: 200, height: 200}}
            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email"  autoFocus type="email" value={email} onChangeText={(text) => setEmail(text)} />
                <Input placeholder="Password" secureTextEntry autoFocus type="password" value={password} onChangeText={(text) => setPassword(text)} />
            </View>
            {/* in order to style anything, you have to wrap it in the containerStyle and then add styles.something*/}
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            {/* with naviagation we can naviagate to the another screens by giving the name of the screen*/}
            <Button containerStyle={styles.button} onPress={() => navigation.navigate("Register")} type="outline" title="Register" />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    }
});