import React, {useLayoutEffect} from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native"
import CustomListItem from "../components/CustomListItem";
import {Avatar} from "react-native-elements";

const HomeScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Rookas Chat App",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () =>
                <View style={{ marginLeft: 20 }} >
                    <Avatar />
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
