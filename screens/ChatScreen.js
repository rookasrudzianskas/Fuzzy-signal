import React, {useLayoutEffect, useState} from "react";
import {
    Image, Keyboard,
    KeyboardAvoidingView, Platform,
    SafeAreaView, ScrollView,
    StatusBar,
    StyleSheet,
    Text, TextInput,
    TouchableOpacity, TouchableWithoutFeedback,
    View
} from "react-native"
import {Avatar} from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import {ImageBackground} from "react-native";
import firebase from "firebase";
import {auth} from "../firebase";
import db from "../firebase";
const ChatScreen = ({ navigation, route }) => {

    const [input, setInput] = useState('');

    const sendMessage = () => {
        Keyboard.dismiss();
        // we haev params in here
        db.collection("chats").doc(route.params.id).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
        })

        setInput('')

    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Chat",
            headerTitleAlign: "left",
            headerBackTitleVisible: false,
            headerTitle: () => (
                <View style={{ flexDirection: "row", alignItems: "center", }}>
                    <Avatar rounded source={{uri: "https://www.vhv.rs/dpng/d/505-5058560_person-placeholder-image-free-hd-png-download.png"}}/>
                    <Text style={{ color: "white", marginLeft: 10, fontWeight: "700", }}>{route.params.chatName}</Text>
                </View>
            ),

            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={navigation.goBack}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
            ),

            headerRight: () => (
              <View style={{ flexDirection: "row", justifyContent: "space-between", width: 80, marginRight: 20, }}>
                  <TouchableOpacity>
                      <FontAwesome name="video-camera" size={24} color="white" />
                  </TouchableOpacity>

                  <TouchableOpacity>
                      <Ionicons name="call" size={24} color="white" />
                  </TouchableOpacity>
              </View>
            ),
        });
    }, [navigation]);

    // style={{ flex: 1, backgroundImage: "https://theabbie.github.io/blog/assets/official-whatsapp-background-image.jpg" }}
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", }} >
            <StatusBar style="auto" />
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container} keyboardVerticalOffset={90}>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <>
                    <ScrollView>
                    {/*    chat goes in here    */}

                    </ScrollView>
                    <View style={styles.footer}>
                        <TextInput onSubmitEditing={sendMessage} placeholder="Rookas Message" style={styles.textInput} value={input} onChangeText={text => setInput(text)}/>
                        <TouchableOpacity activeOpacity={0.5} onPress={sendMessage}>
                            <Ionicons name="send" size={24} color="#2B68E6" />
                        </TouchableOpacity>
                    </View>
                    </>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

            {/*</Image>*/}
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: "175%",
    },

    footer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 15,
    },

    textInput: {
        bottom: 0,
        height: 40,
        flex: 1,
        marginRight: 15,
        borderColor: "transparent",
        backgroundColor: "#ECECEC",
        borderWidth: 1,
        padding: 10,
        color: "grey",
        borderRadius: 30,
    },
})
