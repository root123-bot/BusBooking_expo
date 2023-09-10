import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

function DetailsScreen({ navigation }) {
  return (
    <>
      <StatusBar style="light" />
      <View
        style={{
          flex: 1,
          position: "relative",
          backgroundColor: COLORS.background,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
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
