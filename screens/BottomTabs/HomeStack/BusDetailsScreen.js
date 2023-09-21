import React, { memo } from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Button, HelperText, TextInput } from "react-native-paper";
import RouteCard from "../../../components/RouteCard";
import * as RNPaper from "react-native-paper";
import { CustomLine } from "../../../components/ui";
function BusDetailsScreen({ navigation, route }) {
  const { bus } = route.params;
  console.log("Bus: ", bus);
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
                  <TouchableOpacity
                    onPress={() => navigation.navigate("RouteSearchDetails")}
                  >
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
            paddingBottom: 100,
          }}
        >
          <View
            style={{
              borderRadius: 15,
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: COLORS.light,
              shadowColor: "black",
              padding: 13,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              elevation: 5,
              shadowOpacity: 0.5,
              shadowRadius: 3.84,
              marginVertical: 10,
              marginTop: 20,
              // backgroundColor: "red",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <View>
              <RNPaper.Text
                style={{
                  marginBottom: 0,
                  fontWeight: "bold",
                  color: COLORS.lightGrey,
                }}
              >
                BUS #092
              </RNPaper.Text>
              <HelperText
                padding="none"
                style={{
                  marginTop: 0,
                  paddingTop: 0,
                  marginBottom: 0,
                  paddingBottom: 0,
                }}
              >
                Plate:{" "}
                <Text style={{ fontFamily: "overpass-reg" }}>T123ABC</Text>
              </HelperText>
            </View>
            <View>
              <RNPaper.Text
                style={{
                  fontWeight: "bold",
                  color: COLORS.darkprimary,
                }}
              >
                9:30 AM
              </RNPaper.Text>
            </View>
          </View>
          <View
            style={{
              borderRadius: 15,
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: COLORS.light,
              shadowColor: "black",
              padding: 13,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              elevation: 5,
              shadowOpacity: 0.5,
              shadowRadius: 3.84,
              marginVertical: 10,
              marginTop: 20,
              // backgroundColor: "red",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
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
                  maxWidth: "15%",
                  justifyContent: "center",
                  //   backgroundColor: "magenta",
                }}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "#CED4DA",
                    borderRadius: 15,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialIcons
                    name="near-me"
                    size={20}
                    color={COLORS.darkprimary}
                  />
                </View>
                <View
                  style={{
                    width: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: 5,
                  }}
                >
                  <View
                    style={{
                      width: 2,
                      borderRightWidth: 2,
                      borderRightColor: COLORS.darkprimary,
                      height: 75,
                    }}
                  ></View>
                </View>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "#CED4DA",
                    borderRadius: 15,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="map-marker-outline"
                    size={20}
                    color={COLORS.darkprimary}
                  />
                </View>
              </View>
              <View
                style={{
                  width: "35%",
                  justifyContent: "space-between",
                  //   backgroundColor: "cyan",
                  paddingLeft: "3%",
                }}
              >
                <View>
                  <RNPaper.Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      color: COLORS.primary,
                    }}
                  >
                    9:30 AM
                  </RNPaper.Text>
                  <RNPaper.HelperText
                    padding="none"
                    style={{
                      marginTop: 0,
                      paddingTop: 0,
                      marginBottom: 0,
                      paddingBottom: 0,
                    }}
                  >
                    July, 17 2022
                  </RNPaper.HelperText>
                </View>
                <View
                  style={{
                    borderRadius: 25,
                    backgroundColor: COLORS.darkprimary,
                    width: 80,
                    height: 25,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <RNPaper.Text
                    style={{
                      color: COLORS.light,
                      fontWeight: "bold",
                    }}
                  >
                    1h 30m
                  </RNPaper.Text>
                </View>
                <View>
                  <RNPaper.Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      color: COLORS.primary,
                    }}
                  >
                    5:00 AM
                  </RNPaper.Text>
                  <RNPaper.HelperText
                    padding="none"
                    style={{
                      marginTop: 0,
                      paddingTop: 0,
                      marginBottom: 0,
                      paddingBottom: 0,
                    }}
                  >
                    July, 17 2022
                  </RNPaper.HelperText>
                </View>
              </View>
              <View
                style={{
                  width: "50%",
                  //   backgroundColor: "red",
                  //   paddingLeft: "10%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <RNPaper.Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      color: "#495057",
                    }}
                    numberOfLines={1}
                  >
                    Dar es salaam
                  </RNPaper.Text>
                  <RNPaper.HelperText
                    numberOfLines={1}
                    padding="none"
                    style={{
                      marginTop: 0,
                      paddingTop: 0,
                      marginBottom: 0,
                      paddingBottom: 0,
                    }}
                  >
                    Ubungo Bus Terminal
                  </RNPaper.HelperText>
                </View>
                <View
                  style={{
                    width: 2,
                    borderRightWidth: 2,
                    borderRightColor: COLORS.darkprimary,
                    height: 40,
                  }}
                ></View>
                <View>
                  <RNPaper.Text
                    numberOfLines={1}
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      color: "#495057",
                    }}
                  >
                    Mombasa
                  </RNPaper.Text>
                  <RNPaper.HelperText
                    numberOfLines={1}
                    padding="none"
                    style={{
                      marginTop: 0,
                      paddingTop: 0,
                      marginBottom: 0,
                      paddingBottom: 0,
                    }}
                  >
                    Azikiwe Station
                  </RNPaper.HelperText>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              borderRadius: 15,
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: COLORS.light,
              shadowColor: "black",
              padding: 13,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              elevation: 5,
              shadowOpacity: 0.5,
              shadowRadius: 3.84,
              marginVertical: 10,
              marginTop: 20,
              marginBottom: 100,
              // backgroundColor: "red",
              //   flexDirection: "row",
              //   justifyContent: "space-between",
              //   alignItems: "flex-start",
            }}
          >
            <View>
              <RNPaper.Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: COLORS.lightGrey,
                }}
              >
                Baggage Prices
              </RNPaper.Text>
              <HelperText
                padding="none"
                style={{
                  marginTop: 0,
                  paddingTop: 0,
                }}
              >
                In case you want to travel with luggage.
              </HelperText>
              <CustomLine
                style={{
                  marginBottom: 0,
                  paddingBottom: 0,
                }}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 12,
                  alignItems: "center",
                }}
              >
                <RNPaper.Text
                  style={{
                    fontWeight: "bold",
                    color: COLORS.lightGrey,
                  }}
                >
                  Cabin Baggage 7 Kg
                </RNPaper.Text>
                <RNPaper.Text
                  style={{
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  Free
                </RNPaper.Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 12,
                  alignItems: "center",
                }}
              >
                <RNPaper.Text
                  style={{
                    fontWeight: "bold",
                    color: COLORS.lightGrey,
                  }}
                >
                  -15 kg baggage
                </RNPaper.Text>
                <RNPaper.Text
                  style={{
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  Free
                </RNPaper.Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 12,
                  alignItems: "center",
                }}
              >
                <RNPaper.Text
                  style={{
                    fontWeight: "bold",
                    color: COLORS.lightGrey,
                  }}
                >
                  +15 kg baggage
                </RNPaper.Text>
                <RNPaper.Text
                  style={{
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  $15
                </RNPaper.Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 12,
                  alignItems: "center",
                }}
              >
                <RNPaper.Text
                  style={{
                    fontWeight: "bold",
                    color: COLORS.lightGrey,
                  }}
                >
                  +25 kg baggage
                </RNPaper.Text>
                <RNPaper.Text
                  style={{
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  $25
                </RNPaper.Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 12,
                  alignItems: "center",
                }}
              >
                <RNPaper.Text
                  style={{
                    fontWeight: "bold",
                    color: COLORS.lightGrey,
                  }}
                >
                  +50 kg baggage
                </RNPaper.Text>
                <RNPaper.Text
                  style={{
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  $45
                </RNPaper.Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            width: "100%",
            position: "absolute",
            bottom: 0,
            left: 0,
            backgroundColor: "#E5E5E5",
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              paddingHorizontal: 20,
              borderTopColor: "grey",
              borderTopWidth: 0.5,
            }}
          >
            <View
              style={{
                width: "40%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <Text
                  style={{
                    fontFamily: "montserrat-17",
                    fontSize: 25,
                    color: COLORS.darkprimary,
                  }}
                >
                  $20
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "overpass-reg",
                    color: COLORS.lightGrey,
                  }}
                >
                  /seat
                </Text>
              </View>
            </View>
            <Button
              mode="contained"
              style={{
                width: "50%",
                backgroundColor: COLORS.darkprimary,
                borderRadius: 20,
              }}
              onPress={() => navigation.navigate("PickSeatsScreen")}
            >
              Choose
            </Button>
          </View>
        </View>
      </View>
    </>
  );
}

export default memo(BusDetailsScreen);
