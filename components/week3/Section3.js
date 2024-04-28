import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section3() {
    return (
        <View style={{flex:1, flexDirection: 'row'  }}>
            <View style={{ }}>
                <View style={{flex:1, width: 40, height: 40, borderRadius: 20, backgroundColor: '#ff5722', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontSize: 20, textAlign: 'center',color:'white',  }}>9.5</Text>
                </View>
                <View style={{flex:2,marginLeft: 10  }}>
                <Text style={{ flex:1,fontSize : 11, textAlign:"center"}}>Excellent</Text>
                <Text style={{ flex:2,fontSize : 11, textAlign:"center"}}>See 801 reviews</Text>         
                </View> 
            </View>
        </View>    
    );
}