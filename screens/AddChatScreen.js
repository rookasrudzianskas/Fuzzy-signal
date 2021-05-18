import React, {useLayoutEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native"
import { Input} from "react-native-elements/dist/input/Input";
import {Icon} from "react-native-elements";
import {AntDesign, Entypo, Foundation, SimpleLineIcons} from "@expo/vector-icons";
import { Button } from 'react-native-elements';
import db from "../firebase";
const AddChatScreen = ({ navigation }) => {

    const [input, setInput] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new chat",
            headerBackTitle: "Chats",
        })
    }, [navigation]);

    const createChat = async () => {
        // adds new chat to the firebase
        await db.collection('chats').add({
            chatName: input
        }).then(() => {
            navigation.goBack()
        }).catch(error => alert(error));
    }

    return (
        <View style={styles.container}>
            <Input placeholder="Enter a chat name" value={input} onChangeText={text => setInput(text)} leftIcon={<Icon name="wechat" type="antdesign" size={24} color="black"/>}/>
            <Button onPress={createChat} title="Create new chat" />
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
   container: {

   }
});
