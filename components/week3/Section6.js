import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section6() {
    return (
        <View style={{ padding : 20  }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 10 }}>
                
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Located</Text>
                    <Text style={{ color: "gray" }}>   
                    218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor </Text>
                </View>
            </View>
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 4/2 }} source={require("../../assets/week3/map.jpg")} />
            </View>
            
        </View>    
    );
}
