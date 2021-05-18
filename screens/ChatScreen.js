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
    const [messages, setMessages] = useState([]);
    console.log(typeof(messages));
    console.log(messages)
    const sendMessage = () => {
        Keyboard.dismiss();
        // we haev params in here
        //Iraso
        db.collection("chats").doc(route.params.id).collection("messages").add({
                timestamp: firebase.default.firestore.FieldValue.serverTimestamp(),
                message: input,
                displayName: auth.currentUser.displayName,
                email: auth.currentUser.email,
                photoURL: auth.currentUser.photoURL,
        }).catch(error => alert(error))

        setInput('');

    };

    useLayoutEffect(() => {
        const unsubscribe = db.collection("chats").doc(route.params.id).collection("messages").orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setMessages(
                snapshot.docs?.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        });

        return unsubscribe;
    }, [route]);

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
    }, [navigation, messages]);

    // style={{ flex: 1, backgroundImage: "https://theabbie.github.io/blog/assets/official-whatsapp-background-image.jpg" }}
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", }} >
            <StatusBar style="auto" />
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container} keyboardVerticalOffset={90}>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <>
                    <ScrollView>

                        {messages.map(({ id, data }) =>
                            data.email === auth.currentUser.email ? (
                                <View key={id} style={styles.sender}>
                                    <Avatar
                                        rounded
                                        // web
                                        containerStyle={{
                                            position: "absolute",
                                            bottom: -15,
                                            right: -5,
                                        }}
                                        size={24}
                                        source={{ uri: data.photoURL }}
                                    />
                                    <Text style={styles.senderText}>{data.message}</Text>
                                </View>
                            ) : (
                                <View key={id} style={styles.reciever}>
                                    <Avatar
                                        rounded
                                        // web
                                        containerStyle={{
                                            position: "absolute",
                                            bottom: -15,
                                            left: -5,
                                        }}
                                        size={24}
                                        source={{ uri: data.photoURL }}
                                    />
                                    <Text style={styles.recieverName}>{data.displayName}</Text>
                                    <Text style={styles.recieverText}>{data.message}</Text>
                                </View>
                            )
                        )}
                    {/*    chat goes in here    */}

                    </ScrollView>

                    <View style={styles.footer}>
                        <TextInput onSubmitEditing={sendMessage} placeholder={`${auth.currentUser.displayName}, send a message 🚀`} style={styles.textInput} value={input} onChangeText={text => setInput(text)}/>
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

    reciever: {
        padding: 10,
        backgroundColor: "#2B68E6",
        alignSelf: "flex-start",
        borderRadius: 20,
        marginLeft: 15,
        maxWidth: "80%",
        position: "relative",
        marginBottom: 10,
    },
    recieverName: {
        left: 10,
        paddingRight: 10,
        fontSize: 12,
        color: "white",
    },
    sender: {
        padding: 15,
        backgroundColor: "#ECECEC",
        alignSelf: "flex-end",
        borderRadius: 20,
        marginRight: 15,
        marginBottom: 10,
        maxWidth: "80%",
        position: "relative",
        marginTop: 10
    },
    recieverText: {
        color: "white",
        fontWeight: "500",
    },
    senderText: {
        color: "black",
        fontWeight: "500",
    },

    footer: {
        flexDirection: "row",
        padding: 15,
        width: "100%",
        alignItems: "center",
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
