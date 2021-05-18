import React, {useLayoutEffect} from "react";
import {
    Image,
    KeyboardAvoidingView, Platform,
    SafeAreaView, ScrollView,
    StatusBar,
    StyleSheet,
    Text, TextInput,
    TouchableOpacity,
    View
} from "react-native"
import {Avatar} from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import {ImageBackground} from "react-native";

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
        <SafeAreaView  >
            {/*<Image*/}
            {/*    source={{uri: 'https://theabbie.github.io/blog/assets/official-whatsapp-background-image.jpg'}}*/}
            {/*    style={{*/}
            {/*        flex: 1,*/}
            {/*        width: null,*/}
            {/*        height: null,*/}
            {/*        resizeMode: 'stretch',*/}
            {/*    }}*/}
            {/*>*/}
            <StatusBar style="auto" />
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container} keyboardVerticalOffset={90}>
                <>
                    <ScrollView>
                    {/*    chat goes in here    */}

                    </ScrollView>
                    <View style={styles.footer}>
                        <TextInput placeholder="Rookas Message"/>
                    </View>
                </>
            </KeyboardAvoidingView>
            {/*</Image>*/}
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {

    },

    footer: {

    },
})
