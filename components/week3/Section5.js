import React from "react";
import MyIcon from "./MyIcon";
import { TextInput, View } from "react-native";
export default function Section5() {
 return (
 <View style={{ }}>
 {/* View กอนที่ 1 */}

 {/* View กอนที่ 2 */}
 <View style={{ flexDirection : "row", marginTop : 10 }}>
 <MyIcon title="wifi" name="wifi" size={30} color="darkslategray" />
 <MyIcon title="coffee" name="coffee" size={30} color="darkslategray" />
 <MyIcon title="car" name="car" size={30} color="darkslategray" />
 <MyIcon title="paw" name="paw" size={30} color="darkslategray" />
  </View>

 </View>
 );
}