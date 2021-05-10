import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Button, Input, Image} from "react-native-elements";
import {StatusBar} from "expo-status-bar";


const LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View>
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
            <Button containerStyle={styles.button} title="Login" />
            <Button containerStyle={styles.button} type="outline" title="Register" />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    inputContainer: {

    },
    button: {

    }
});