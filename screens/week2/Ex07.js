import React from 'react';
import { View } from 'react-native';

export default function Ex07() {
  return (
    <View style={{ flex : 1 , flexDirection : 'row' ,alignItems:'flex-end'  }}>    
      <View style={{width: 100, height: 100, backgroundColor:'#50E3C2'}}></View>      
      <View style={{width: 100, height: 100, backgroundColor:'#42a5d7'}}></View>      
      <View style={{width: 100, height: 100, backgroundColor:'#9442d7'}}></View>      
    </View>
  );
}