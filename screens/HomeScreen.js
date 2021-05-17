import React, {useLayoutEffect} from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native"
import CustomListItem from "../components/CustomListItem";
import {Avatar} from "react-native-elements";
import { auth, db } from "../firebase";

const HomeScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Rookas Chat App",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () =>
                <View style={{ marginLeft: 20 }} >
                    <Avatar rounded source={{uri: auth?.currentUser?.photoURL }}/>
                </View>,
        });
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
