import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from 'react-native';
export default function Section7() {
    return (
        <View style={{ padding : 20  }}>

             {/* View ก้อนที่ 3 */}
            <View style={{ marginTop : 10 }}>
                <Text style={{ fontSize : 20 }}>Room Type</Text>
            </View>

            
            
            {/* View ก้อนที่ 1 */}
            <View style={{ flexDirection : "row" }}>
                <Image style={{ flex : 1 , resizeMode : "cover" , aspectRatio : 5/2, borderRadius : 20 }} source={require("../../assets/week3/room-8.jpg")} />
            </View>
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection : "row", marginTop : 5 }}>
               
                <Text style={{ fontSize : 10, color : 'gray' }}>  Hurry Up! This is your last room!</Text>
            </View>
           
          
           
            {/* View ก้อนที่ 5 */}
            <View style={{ marginTop : 10 }}>
                <Text  style={{ fontSize : 20 , color : 'red'}} >$399.99</Text>
            </View>
        </View>    
    );
}
