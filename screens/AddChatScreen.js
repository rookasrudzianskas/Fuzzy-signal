import React, {useLayoutEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native"
import { Button, Input} from "react-native-elements/dist/input/Input";
import {Icon} from "react-native-elements";
import {AntDesign, Entypo, Foundation, SimpleLineIcons} from "@expo/vector-icons";

const AddChatScreen = ({ navigation }) => {

    const [input, setInput] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new chat",
            headerBackTitle: "Chats",
        })
    }, []);
    return (
        <View style={styles.container}>
            <Input placeholder="Enter a chat name" value={input} onChangeText={text => setInput(text)} leftIcon={<Icon name="wechat" type="antdesign" size={24} color="black"/>}/>
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
   container: {

   }
});
