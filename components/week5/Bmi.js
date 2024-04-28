import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
export default function Bmi() {
    const [weight , setWeight] = useState('70');
    const [height , setHeight] = useState('170');
    const [bmi , setBmi] = useState('0')
    const [bma,setBma] = useState('0');
    
    console.log("STATE : ", weight, height,bmi, bma);

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight/ (height/100 * height/100));
        let description = "";
        if (output<18.5)
                description ="Underweight";
        else if (output>=18.5 && output<=24.99)
                description ="Normal";
        else if (output>=25 && output<=29.99)
                description ="Overweight";
        else if (output>=30 && output<=39.99)
                description ="Obese";
        else if (output>=40 )
                description ="Extremely Obese";
        else
        description ="Morbidly Obese - take action!";

        setBmi(output.toFixed(2));
        setBma(description);
        
        
    };



    return (
        <View>
            {/* แถวที่ 1 */}
            <View style={{backgroundColor: "white", padding:20,borderRadius:25, height : 100, justifyContent:"space-around", marginTop :20}}>
                <Text style={{fontSize:20}}>Weight (kg.)</Text>
                <TextInput value={ weight } onChangeText={ (newWeight) => setWeight(newWeight) } placeholder="Input your weight" keyboardType="numeric" />
            </View>
            {/* แถวที่ 2 */}
            <View style={{backgroundColor: "white", padding:20,borderRadius:10, height : 120, justifyContent:"space-around", marginTop :20}}>
                <Text style={{fontSize:20}}>Height (cm.)</Text>
                <TextInput value={ height } onChangeText={ (newHeight) => setHeight(newHeight) } placeholder="Input your height" keyboardType="numeric" />
            </View>
            {/* แถวที่ 3 */}
            <View style={{flexDirection : "row", marginVertical:20}}>
                
                <View style={{backgroundColor : "white", flex:1, borderRadius : 10, height:100, justifyContent : "center" , alignItems:"center" ,marginRight:10}}>
                    <Text style={{fontSize:20}}>{ bmi }</Text>
                </View>
                <View style={{backgroundColor : "white", flex:1, borderRadius : 10, height:100, justifyContent : "center" , alignItems:"center" ,marginLeft:10}}>
                    <Text  style={{fontSize:20}}>{bma}</Text>
                </View>
            </View>
            {/* แถวที่ 4 */}
            {/* <Button title="Calculate" onPress={ onPressButton } />             */}
            <TouchableOpacity onPress={onPressButton}>
             <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                 <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
            Calculate
            </Text>
             </View>
            </TouchableOpacity>

        </View>
    );
}

