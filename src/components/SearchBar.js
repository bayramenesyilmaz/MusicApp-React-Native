import React from "react";
import { TextInput,View } from "react-native";
import styless from "./SearchBarStyless";

const SearchBar = (props) => {

    return(

        <View style={styless.container}>
            <TextInput
                style={styless.textInput}
                placeholder="Ara..."
                onChangeText={props.onSearch}
             />
        </View>

    )
}

export default SearchBar;