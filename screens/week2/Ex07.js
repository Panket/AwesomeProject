import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';

export default function Ex07() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flex : 1 , flexDirection : 'row' ,alignItems:'flex-end'  }}>    
      <View style={{width: 100, height: 100, backgroundColor:'#50E3C2'}}></View>      
      <View style={{width: 100, height: 100, backgroundColor:'#4A90E2'}}></View>      
      <View style={{width: 100, height: 100, backgroundColor:'#9013FE'}}></View>      
    </View>
    <Button title="Next" onPress={() => navigation.navigate("Ex08")} />
    </View>
  );
}