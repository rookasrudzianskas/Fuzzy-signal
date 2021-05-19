import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native"
import {ListItem, Avatar} from "react-native-elements";
import db from "../firebase";

const CustomListItem = ({ id, chatName, enterChat, timestamp }) => {

    const [chatMessages, setChatMessages] = useState([]);
    console.log("Chat messages >>>>", chatMessages.length)
    useEffect(() => {
        const unsubscribe = db.collection("chats").doc(id).collection("messages").orderBy('timestamp', "desc").onSnapshot(snapshot => {
            setChatMessages(snapshot.docs.map(doc => doc.data()))
        });

        return unsubscribe;
    })
    return (
        // this calls a function enterChat
        <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
            <Avatar
                rounded
                source={{uri: chatMessages?.[0]?.photoURL || "https://www.vhv.rs/dpng/d/505-5058560_person-placeholder-image-free-hd-png-download.png"}}
            />

            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    {chatName}
                </ListItem.Title>

                <ListItem.Subtitle numberOfLines={1}  ellipsizeMode="tail">
                    ABC
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
