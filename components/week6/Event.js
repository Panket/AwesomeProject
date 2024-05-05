import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Event(props) {
  const tours = [
    {
      id: "1",
      title: "Truckfighters: Performing",
      uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-1.jpg",
      month: "DEC",
      date: "30",
      datetime: "Thu, DEC 30, 09.00 am",
      place: "London",
    },
    {
      id: "2",
      title: "Paris Motor Show",
      uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-2.jpg",
      month: "DEC",
      date: "31",
      datetime: "Thu, DEC 30, 09.00 am",
      place: "Paris",
    },
    {
      id: "3",
      title: "Bearded Theory Spring",
      uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-3.jpg",
      month: "JAN",
      date: "01",
      datetime: "Thu, JAN 01, 09.00 am",
      place: "Canada",
    },
    {
      id: "4",
      title: "BBC Music Introducing",
      uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-4.jpg",
      month: "JAN",
      date: "11",
      datetime: "Thu, JAN 11, 09.00 am",
      place: "USA",
    },
    {
      id: "5",
      title: "Start-Up Meeting 2022",
      uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg",
      month: "JAN",
      date: "21",
      datetime: "Thu, JAN 21, 09.00 am",
      place: "Thailand",
    },
  ];
  const [onlineTours, setOnlineTours] = useState([]);
  const loadOnlineTours = async () => {
    try {
      let text = await fetch(
        "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json"
      );
      let data = await text.json();
      console.log("Load Data : ", data);
      //SET STATE
      setOnlineTours(data);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };
  useEffect(() => {
    loadOnlineTours();
  }, []);

  return (
    <View style={props.style}>
      <Text style={{ marginRight: 10 }}>Up Coming Eeve</Text>
      <Text style={{ marginRight: 10 }}>
        When's the worst That couid Happend
      </Text>
      <FlatList
        horizontal={true}
        data={onlineTours}
        renderItem={({ item, index }) => {
          console.log(item, index, item.uri);

          return (
            <View style={{ marginRight: 10 }}>
              <Image
                style={{ width: 200, height: 150, borderRadius: 10 }}
                source={{
                  uri: item.uri,
                }}
              />
              <View
                style={{
                  marginTop: -30,
                  height: 30,
                  width: 200,
                  paddingHorizontal: 10,
                  backgroundColor: "black",
                  opacity: 0.5,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              >
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                                            <Text style={{ fontSize: 12, color: "red" }}>{item.month}</Text>
                                            <Text style={{ fontSize: 12,color: "white" }}>{item.date}</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontSize: 12, color: "yellow"}}>{item.title}</Text>
                                            <Text style={{ fontSize: 12, color: "white" }}>{item.datetime}</Text>
                                            <Text style={{ fontSize: 12, color: "gray" }}>{item.place}</Text>
                                        </View>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
