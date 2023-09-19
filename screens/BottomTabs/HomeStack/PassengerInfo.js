import { StatusBar } from "expo-status-bar";
import React, { memo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { COLORS } from "../../../constants/colors";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { HelperText, Button } from "react-native-paper";
import * as RNPaper from "react-native-paper";
import { CustomLine } from "../../../components/ui";
function FillPassengerInfo({ route, navigation }) {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.container}>
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
                      onPress={() => navigation.navigate("PickSeatsScreen")}
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
              paddingBottom: 50,
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
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
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
                      Booking Details
                    </RNPaper.Text>
                    <View
                      style={{
                        marginTop: 10,
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontFamily: "overpass-reg",
                            color: COLORS.lightGrey,
                          }}
                        >
                          Total seats: 3
                        </Text>
                        <Text
                          style={{
                            fontFamily: "overpass-reg",
                            color: COLORS.lightGrey,
                          }}
                        >
                          Seat Labels: 1, 8, 10
                        </Text>
                      </View>
                      <View></View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {/* <View
              style={{
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto",
                paddingTop: 13,
              }}
            >
              <RNPaper.Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: COLORS.lightGrey,
                }}
              >
                Fill Passenger Info
              </RNPaper.Text>
            </View> */}
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
              }}
            >
              <View
                style={{
                  marginBottom: 10,
                }}
              >
                <RNPaper.Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 17,
                    color: COLORS.lightGrey,
                    textAlign: "center",
                  }}
                >
                  Provide Passenger(s) Info
                </RNPaper.Text>
              </View>
              <CustomLine />
              <View
                style={{
                  marginVertical: 10,
                }}
              >
                <RNPaper.Text
                  style={{
                    fontWeight: "bold",
                    color: COLORS.lightGrey,
                  }}
                >
                  ● Seat Label 1
                </RNPaper.Text>

                <View>
                  <RNPaper.TextInput
                    mode="outlined"
                    label="Full name"
                    style={{
                      backgroundColor: "white",
                      marginVertical: 10,
                    }}
                    activeOutlineColor={COLORS.lightGrey}
                    outlineColor={COLORS.lightGrey}
                  />
                  <RNPaper.TextInput
                    mode="outlined"
                    label="Phone number"
                    style={{
                      backgroundColor: "white",
                      marginVertical: 10,
                    }}
                    activeOutlineColor={COLORS.lightGrey}
                    outlineColor={COLORS.lightGrey}
                  />
                </View>
              </View>
              <CustomLine />
              <View
                style={{
                  marginVertical: 10,
                }}
              >
                <RNPaper.Text
                  style={{
                    fontWeight: "bold",
                    color: COLORS.lightGrey,
                  }}
                >
                  ● Seat Label 8
                </RNPaper.Text>

                <View>
                  <RNPaper.TextInput
                    mode="outlined"
                    label="Full name"
                    style={{
                      backgroundColor: "white",
                      marginVertical: 10,
                    }}
                    activeOutlineColor={COLORS.lightGrey}
                    outlineColor={COLORS.lightGrey}
                  />
                  <RNPaper.TextInput
                    mode="outlined"
                    label="Phone number"
                    style={{
                      backgroundColor: "white",
                      marginVertical: 10,
                    }}
                    activeOutlineColor={COLORS.lightGrey}
                    outlineColor={COLORS.lightGrey}
                  />
                </View>
              </View>
              <CustomLine />
              <View
                style={{
                  marginVertical: 10,
                }}
              >
                <RNPaper.Text
                  style={{
                    fontWeight: "bold",
                    color: COLORS.lightGrey,
                  }}
                >
                  ● Seat Label 10
                </RNPaper.Text>

                <View>
                  <RNPaper.TextInput
                    mode="outlined"
                    label="Full name"
                    style={{
                      backgroundColor: "white",
                      marginVertical: 10,
                    }}
                    activeOutlineColor={COLORS.lightGrey}
                    outlineColor={COLORS.lightGrey}
                  />
                  <RNPaper.TextInput
                    mode="outlined"
                    label="Phone number"
                    style={{
                      backgroundColor: "white",
                      marginVertical: 10,
                    }}
                    activeOutlineColor={COLORS.lightGrey}
                    outlineColor={COLORS.lightGrey}
                  />
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
                    $250
                  </Text>
                  {/* <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "overpass-reg",
                    color: COLORS.lightGrey,
                  }}
                >
                  /4seat
                </Text> */}
                </View>
              </View>
              <RNPaper.Button
                mode="contained"
                style={{
                  width: "50%",
                  backgroundColor: COLORS.darkprimary,
                  borderRadius: 20,
                }}
                labelStyle={{
                  fontWeight: "bold",
                }}
                onPress={() => navigation.navigate("FillPassengerInfo")}
              >
                Pay now
              </RNPaper.Button>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default memo(FillPassengerInfo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
