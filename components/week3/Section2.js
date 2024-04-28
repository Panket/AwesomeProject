import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";
// import { Text, View } from "react-native";
// import { TextInput, View } from "react-native";

export default function Section2() {
    return (
        
        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 
        
        <View style={{padding : 5,marginTop:5}}>
        <Text style={{ fontSize : 20, textAlign:"center" }}>Hilton San Francisco</Text>
        
        <View style={{ flexDirection : "row", justifyContent : "center"  }}>
                <View style={{ flexDirection : "row", }}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star-half" size={20} color="orange" />
                </View>
               
        </View>
    
        <Text  style={{ color : '#444444',textAlign:"center" } }>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
        </View>

        </View> 
        );
       
   }