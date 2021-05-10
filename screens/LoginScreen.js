import React, {useState} from "react";
import {KeyboardAvoidingView, StyleSheet, Text, View} from "react-native";
import {Button, Input, Image} from "react-native-elements";
import {StatusBar} from "expo-status-bar";


const LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

// sign in function with on PRess from the button
    const signIn = () => {

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
            <Button containerStyle={styles.button} type="outline" title="Register" />
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

    },
    button: {

    }
});