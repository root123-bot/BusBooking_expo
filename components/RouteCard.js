import React, { memo } from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import { COLORS } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

function RouteCard({ metadata }) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={{
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2%",
        marginBottom: "5%",
      }}
      onPress={() =>
        navigation.navigate("BusDetailsScreen", {
          bus: "bus",
        })
      }
    >
      <View
        style={{
          backgroundColor: COLORS.light,
          borderRadius: 15,
          padding: 13,
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          elevation: 5,
          shadowOpacity: 0.5,
          shadowRadius: 3.84,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "overpass-reg",
            }}
          >
            {metadata.bus_info.bus_name}
          </Text>
          {/* <Text
            style={{
              fontSize: 14,
              fontFamily: "overpass-reg",
              color: COLORS.darkprimary,
            }}
          >
            09:30 PM
          </Text> */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                fontFamily: "montserrat-17",
                fontSize: 20,
                color: COLORS.darkprimary,
              }}
            >
              $20
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "overpass-reg",
                color: "#495057",
              }}
            >
              /seat
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            // justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "35%",
            }}
          >
            <Text
              style={{
                fontFamily: "montserrat-17",
                fontSize: 17,
              }}
              numberOfLines={1}
            >
              Dar es salaam
            </Text>
          </View>

          <Image
            source={require("../assets/images/icons/right-arrow.png")}
            style={{
              width: "30%",
              height: 20,
            }}
          />
          <View
            style={{
              width: "35%",
            }}
          >
            <Text
              style={{
                fontFamily: "montserrat-17",
                fontSize: 17,
                textAlign: "right",
              }}
              numberOfLines={1}
            >
              Mombasa
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextInput
            mode="outlined"
            // disabled={true}
            editable={false}
            left={<TextInput.Icon icon="clock-fast" />}
            value={"08:30 PM"}
            style={{
              width: "48%",
            }}
            label={"Arrival Time"}
          />
          <TextInput
            mode="outlined"
            editable={false}
            left={<TextInput.Icon icon="clock-fast" />}
            onChangeText={(text) => setPassengers(text)}
            value={"09:30 PM"}
            label={"Departure Time"}
            style={{
              width: "48%",
            }}
            activeOutlineColor="black"
          />
        </View>
      </View>
    </Pressable>
  );
}

export default memo(RouteCard);
