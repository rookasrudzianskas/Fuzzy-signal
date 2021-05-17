import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, StyleSheet, View} from "react-native";
import {Button, Image, Input} from "react-native-elements";
import {StatusBar} from "expo-status-bar";
import {auth} from "../firebase";

// we pass the navigation, because we need to navigate to and back from this page
const LoginScreen = ({ navigation }) => {
    // states, to store the email and the password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {

        return auth.onAuthStateChanged((authUser) => {
            console.log(authUser)
            if (authUser) {
                navigation.replace("Home")
            }
        });

    }, []);

// sign in function with on PRess from the button
    const signIn = ({ navigation }) => {

    }

    return (
        // keyboardavoidingview is the view, then it goes up, then the keyboard shows up. it adds some padding
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            {/* all that battery icons and so on*/}
            <StatusBar style="light" />
            {/* image file*/}
            <Image source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png",
            }}
            style={{width: 200, height: 200}}
            />
            {/* another view, it is like a div, but it is a view, with some inputs*/}
            {/* they have value set to the email and password, which is accesed from state, bu using onCHange, which takes the text*/}
            {/* from the input and sets to the state*/}
            <View style={styles.inputContainer}>
                <Input placeholder="Email"  autoFocus type="email" value={email} onChangeText={(text) => setEmail(text)} />
                <Input placeholder="Password" secureTextEntry autoFocus type="password" value={password} onChangeText={(text) => setPassword(text)} />
            </View>
            {/* in order to style anything, you have to wrap it in the containerStyle and then add styles.something*/}
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            {/* with naviagation we can naviagate to the another screens by giving the name of the screen*/}
            {/* title is what we see in the top*/}
            <Button containerStyle={styles.button} onPress={() => navigation.navigate("Register")} type="outline" title="Register" />
            {/*empty one, to give some padding then the ekyboard shows up*/}
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
