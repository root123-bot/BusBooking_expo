import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import RouteCard from "../../../components/RouteCard";

function DetailsScreen({ navigation }) {
  return (
    <>
      <StatusBar style="light" />
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.background,
        }}
      >
        <View
          style={{
            width: "100%",
            height: "15%",
            backgroundColor: COLORS.darkprimary,
            justifyContent: "flex-end",
            paddingBottom: 15,
          }}
        >
          <View>
            <View
              style={{
                width: "85%",
                marginLeft: "auto",
                marginRight: "auto",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: "20%",
                  }}
                >
                  <TouchableOpacity>
                    <Ionicons name="arrow-back" size={24} color="white" />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: "60%",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        width: "40%",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 17,
                          fontWeight: "bold",
                          fontFamily: "overpass-reg",
                          marginTop: 5,
                        }}
                        numberOfLines={1}
                      >
                        Dar es salaam
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "10%",
                      }}
                    >
                      <Image
                        source={require("../../../assets/images/icons/right-arrow.png")}
                        style={{
                          width: "100%",
                          height: 20,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: "40%",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: "bold",
                            fontFamily: "overpass-reg",
                            marginTop: 5,
                          }}
                          numberOfLines={1}
                        >
                          Mombasa
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 12,
                        fontFamily: "overpass-reg",
                      }}
                    >{`${new Date().toDateString()}`}</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "20%",
                    alignItems: "flex-end",
                  }}
                >
                  <TouchableOpacity>
                    <FontAwesome5 name="ellipsis-h" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ScrollView
          style={{
            paddingVertical: 20,
          }}
        >
          {/* <View
            style={{
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "2%",
              marginBottom: "5%",
            }}
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
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "overpass-reg",
                  }}
                >
                  Hiace #109
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "overpass-reg",
                    color: COLORS.darkprimary,
                  }}
                >
                  09:30 PM
                </Text>
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
                  source={require("../../../assets/images/icons/right-arrow.png")}
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
          </View> */}
          <RouteCard />
          <RouteCard />
          <RouteCard />
          <RouteCard />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DetailsScreen;
