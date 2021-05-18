import React, {useLayoutEffect} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import {Avatar} from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

const ChatScreen = ({ navigation, route }) => {

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
            )
        });
    }, [navigation]);


    return (
        <View>
            <Text>{route.params.chatName}</Text>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({})
