import React, {useState} from "react";
import { KeyboardAvoidingView, StyleSheet, View} from "react-native"
import {StatusBar} from "expo-status-bar";
import {Button, Input, Text} from "react-native-elements";

const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const register = () => {

    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>
                Create a Signal Account
            </Text>

            <View style={styles.inputContainer}>
                <Input placeholder="Full name" autoFocus type="text" value={name} onChangeText={(text) => setName(text)}/>
                <Input placeholder="Email" type="email" value={email} onChangeText={(text) => setEmail(text)}/>
                <Input placeholder="Password" type="password" secureTextEntry value={password} onChangeText={(text) => setPassword(text)}/>
                <Input placeholder="Profile Picture URL (optional)" type="text" value={imageUrl} onChangeText={(text) => setImageUrl(text)} onSubmitEditing={register}/>
            </View>

            <Button
                raised
                onPress={register}
                title="Register"
                containerStyle={styles.button}
            />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

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
})