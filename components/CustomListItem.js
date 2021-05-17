import React from "react";
import {StyleSheet, Text, View} from "react-native"
import {ListItem, Avatar} from "react-native-elements";

const CustomListItem = () => {
    return (
        <ListItem>
            <Avatar
                rounded
                source={{uri: "https://www.vhv.rs/dpng/d/505-5058560_person-placeholder-image-free-hd-png-download.png"}}
            />

            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    Rookas Chat
                </ListItem.Title>

                <ListItem.Subtitle numberOfLines={1}  ellipsizeMode="tail">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, mollitia.
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
