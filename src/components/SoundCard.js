import React from "react";
import { View, Text, Image } from "react-native";
import styless from "./SoundCardStyless";

function SoundCard(props) {

    return (

        <View style={styless.container}>

            <Image style={styless.image} source={{ uri: props.data.imageUrl }} />
            <View style={styless.container_info}>
                <Text style={styless.title}>{props.data.title}</Text>

                <View style={styless.container_bottom}>
                    <View style={styless.container_album}>
                        <Text style={styless.artist}>{props.data.artist}</Text>
                        <Text style={styless.year}>{props.data.year}</Text>
                    </View>
                    {
                        props.data.isSoldOut && (
                            <View style={styless.redbox}>
                                <Text style={styless.redTitle}>TÜKENDİ</Text>
                            </View>
                        )
                    }

                </View>
                <Text style={styless.album}>{props.data.album}</Text>

            </View>

        </View>

    )
}

export default SoundCard;