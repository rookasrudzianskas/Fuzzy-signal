import React, {useEffect, useLayoutEffect, useState} from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import CustomListItem from "../components/CustomListItem";
import {Avatar} from "react-native-elements";
import { auth } from "../firebase";
import {AntDesign, Entypo, Foundation, SimpleLineIcons} from "@expo/vector-icons";
import db from "../firebase";

const HomeScreen = ({ navigation }) => {

    const [chats, setChats] = useState();
    // console.log(chats);

    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace('Login')
        });
    };

    useEffect(() => {
    //     will run once to get all the channel names
    //    this does the following, goes to the collection chats, takes a snapshot, all the data in it in other words
    //    and sets it to the state setChats, by going per each ones, and taking the info and setting to another object
    //    which is going to be object in array of objects, with id from the current iterating doc id, and the data
    //    from the current iterating doc data (meaning all otehr shit what is in it)
        const unsubscribe = db.collection('chats').onSnapshot(snapshot => (
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        ))
        // detaches the old listener, and adds the new one, for the performace, does not matter how it works
        return unsubscribe;
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Rookas Chat App",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{ marginLeft: 20 }} >
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                    <Avatar rounded source={{uri: auth?.currentUser?.photoURL }}/>
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20,
                }}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="camerao" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Add Chat')} activeOpacity={0.5}>
                        <SimpleLineIcons name="pencil" size={24} color="black" />
                    </TouchableOpacity>

                </View>
        ),
        });
    }, [navigation]);

    return (
        <SafeAreaView>
            <ScrollView>
                {/*for evry chat room, I want to render the component with the props */}
                {/*destructuring everything to make the life easier in another component, to access directly and not per something*/}
                {chats?.map(({ id, data: { chatName }}) => (
                    <CustomListItem key={id} chatName={chatName} id={id} />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
