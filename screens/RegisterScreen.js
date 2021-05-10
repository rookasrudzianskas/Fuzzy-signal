import React, {useState} from "react";
import { KeyboardAvoidingView, StyleSheet, View} from "react-native"
import {StatusBar} from "expo-status-bar";
import {Button, Input, Text} from "react-native-elements";

const RegisterScreen = ({ navigation }) => {
    // defining states for all the inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    // register function. which gets fired, then the button is pressed down
    const register = () => {

    }

    return (
        // the view, which goes up, then the keyboard shows up
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            {/* status bar*/}
            <StatusBar style="light" />
            {/* text is show with the text tag, and the style like h3 is just h3 and it is h3, with the style*/}
            <Text h3 style={{ marginBottom: 50 }}>
                Create a Signal Account
            </Text>
            {/* defining the view, it is a div with inputs*/}
            <View style={styles.inputContainer}>
                {/* the name with onCHange, which sets the name to the name state*/}
                <Input placeholder="Full name" autoFocus type="text" value={name} onChangeText={(text) => setName(text)}/>
                {/* the name with onCHange, which sets the email to the email state*/}
                <Input placeholder="Email" type="email" value={email} onChangeText={(text) => setEmail(text)}/>
                {/* the name with onCHange, which sets the password to the paswword state*/}
                <Input placeholder="Password" type="password" secureTextEntry value={password} onChangeText={(text) => setPassword(text)}/>
                {/*{/* the name with onCHange, which sets the profile image url to the profile image url state*/}
                {/* onSUbmitEditing, is the function fired then the user finished filling up the form*/}
                <Input placeholder="Profile Picture URL (optional)" type="text" value={imageUrl} onChangeText={(text) => setImageUrl(text)} onSubmitEditing={register}/>
            </View>
            {/* Buttons, with the onPress function register fired, and the title which is Register*/}
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

//styles
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