import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function Section8() {
    return (
        <View style={{ padding : 20 }}>
            <Text style={{ fontSize : 20 }}>Price</Text>
            <View style={{ marginTop : 10 }}>
                <Text  style={{ fontSize : 20 , color : 'red'}} >$399.99</Text>
            </View>
            <TextInput style={{ fontSize : 20 , marginTop : 10 , marginBottom : 10 }}  placeholder="Input Address" />
            <Button title="Book Now" color="red" />
        </View>    
    );
}
