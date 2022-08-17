import React, { useState } from "react";
import { Dimensions, FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import music_data from "../music-data.json";
import SearchBar from "./SearchBar";
import SoundCard from "./SoundCard";

const App = () => {

    const [list, setList] = useState(music_data)

    function renderItem({ item }) {
        return <SoundCard data={item} />
    }

    function separatorRender() {
        return <View style={styless.separator} />
    }

    function handleSearch(item) {
        let filteredItem = music_data.filter(song => {

            let searchText = item.toLowerCase();
            let currentTitle = song.title.toLowerCase();

            return currentTitle.indexOf(searchText) > -1;
        })

        setList(filteredItem);
    }


    return (

        <SafeAreaView style={styless.container}>

            <SearchBar onSearch={handleSearch} />

            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={separatorRender}
            />

        </SafeAreaView>

    )
}

export default App;

const styless = StyleSheet.create({
    container: {
        backgroundColor: "#e0e0e0",
        height:Dimensions.get("window").height/1,
        paddingBottom:25
    },
    separator: {
        borderWidth: 1,
        borderColor: "#e0e0e0"
    }
})