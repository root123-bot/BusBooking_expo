import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  Keyboard,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../../constants/colors";
import SearchBar from "../../../components/SearchBar";
import { Button, TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
// import DatePicker from "react-native-date-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import { CustomLine } from "../../../components/ui";

const { height } = Dimensions.get("window");

function RouterCard() {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        aliginItems: "center",
      }}
    >
      <View
        style={{
          width: "60%",
          backgroundColor: COLORS.light,
          height: 170,
          borderRadius: 15,
          borderRightWidth: 2,
          borderRightColor: COLORS.background,
          shadowColor: "#DEE2E6",
          padding: 15,
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
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: COLORS.background,
            height: 10,
            width: 10,
            borderBottomLeftRadius: 6,
          }}
        ></View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            backgroundColor: COLORS.background,
            height: 10,
            width: 10,
            borderTopLeftRadius: 6,
          }}
        ></View>
        <View>
          <Text
            style={{
              fontSize: 17,
              fontFamily: "montserrat-17",
              color: COLORS.darkprimary,
            }}
          >
            HIACE #109
          </Text>
        </View>
        <View></View>
      </View>
      <View
        style={{
          width: "40%",
          height: 170,
          backgroundColor: COLORS.light,
          borderRadius: 15,
          shadowColor: "#DEE2E6",
          padding: 15,
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
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: COLORS.background,
            height: 10,
            width: 10,
            borderBottomRightRadius: 6,
          }}
        ></View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            backgroundColor: COLORS.background,
            height: 10,
            width: 10,
            borderTopRightRadius: 6,
          }}
        ></View>
      </View>
    </View>
  );
}

function HomeScreen() {
  const [from, setFrom] = useState("Dar es salaam");
  const [fromIcon, setFromIcon] = useState("chevron-down");
  const [toggleFromIcon, setToggleFromIcon] = useState("none");
  const [destination, setDestination] = useState("Kahama");
  const [destinationIcon, setDestinationIcon] = useState("chevron-down");
  const [toggleDestinationIcon, setToggleDestinationIcon] = useState("none");
  const [passengers, setPassengers] = useState("1");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  // const [show, setShow] = useState(false);
  const [departureDate, setDepartureDate] = useState(new Date());

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type === "set") {
      const currentDate = selectedDate;

      if (Platform.OS === "android") {
        toggleDatePicker();
        setDepartureDate(currentDate);
      } else {
        setDepartureDate(currentDate);
      }
      // this should be set here down below
      setDate(currentDate);
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

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
            height: "25%",
            backgroundColor: COLORS.darkprimary,
          }}
        ></View>
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              width: "85%",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "5%",
            }}
          >
            <View
              style={{
                marginTop: height * 0.125,
                backgroundColor: COLORS.light,
                borderRadius: 15,
                padding: 10,
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
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "overpass-reg",
                    color: "black",
                    marginTop: 10,
                    textAlign: "center",
                  }}
                >
                  Welcome, Pick route
                </Text>
                <View style={styles.formInput}>
                  {Platform.OS === "ios" ? (
                    <>
                      <Pressable
                        onPress={() => {
                          if (toggleFromIcon === "none") {
                            setToggleFromIcon("flex");
                            setFromIcon("chevron-up");
                            setToggleDestinationIcon("none");
                            setDestinationIcon("chevron-down");
                            Keyboard.dismiss();
                          } else {
                            setToggleFromIcon("none");
                            setFromIcon("chevron-down");
                          }
                        }}
                      >
                        <View pointerEvents="none">
                          <TextInput
                            mode="outlined"
                            editable={false}
                            // disabled
                            left={<TextInput.Icon icon="near-me" />}
                            right={<TextInput.Icon icon={fromIcon} />}
                            value={from}
                            label={"From"}
                          />
                        </View>
                      </Pressable>
                      <Picker
                        mode="dropdown"
                        selectedValue={from}
                        onValueChange={(text) => setFrom(text)}
                        style={[
                          styles.pickerStyling,
                          { display: toggleFromIcon },
                        ]}
                      >
                        <Picker.Item
                          label="Dar es salaam"
                          value="Dar es salaam"
                        />
                        <Picker.Item label="Mtwara" value="Mtwara" />
                        <Picker.Item label="Songea" value="Songea" />
                        <Picker.Item label="Iringa" value="Iringa" />
                        <Picker.Item label="Mwanza" value="Mwanza" />
                      </Picker>
                    </>
                  ) : (
                    <>
                      <View style={{ marginTop: "2%" }}>
                        <Text style={{ marginLeft: "3%" }}>From:</Text>
                        <View
                          style={{
                            borderColor: "black",
                            // borderRadius: 5,
                            borderWidth: 1,
                          }}
                        >
                          <Picker
                            mode="dropdown"
                            style={{
                              backgroundColor: "white",
                            }}
                            selectedValue={from}
                            onValueChange={(text) => setFrom(text)}
                          >
                            <Picker.Item
                              label="Dar es salaam"
                              value="Dar es salaam"
                            />
                            <Picker.Item label="Mtwara" value="Mtwara" />
                            <Picker.Item label="Songea" value="Songea" />
                            <Picker.Item label="Iringa" value="Iringa" />
                            <Picker.Item label="Mwanza" value="Mwanza" />
                          </Picker>
                        </View>
                      </View>
                    </>
                  )}
                </View>
                <View style={styles.formInput}>
                  {Platform.OS === "ios" ? (
                    <>
                      <Pressable
                        onPress={() => {
                          if (toggleDestinationIcon === "none") {
                            setToggleDestinationIcon("flex");
                            setDestinationIcon("chevron-up");
                            setToggleFromIcon("none");
                            setFromIcon("chevron-down");
                            Keyboard.dismiss();
                          } else {
                            setToggleDestinationIcon("none");
                            setDestinationIcon("chevron-down");
                          }
                        }}
                      >
                        <View pointerEvents="none">
                          <TextInput
                            mode="outlined"
                            editable={false}
                            left={<TextInput.Icon icon="map-marker" />}
                            right={<TextInput.Icon icon={destinationIcon} />}
                            value={destination}
                            label={"Destination"}
                          />
                        </View>
                      </Pressable>
                      <Picker
                        mode="dropdown"
                        selectedValue={destination}
                        onValueChange={(text) => setDestination(text)}
                        style={[
                          styles.pickerStyling,
                          { display: toggleDestinationIcon },
                        ]}
                      >
                        <Picker.Item
                          label="Dar es salaam"
                          value="Dar es salaam"
                        />
                        <Picker.Item label="Mtwara" value="Mtwara" />
                        <Picker.Item label="Songea" value="Songea" />
                        <Picker.Item label="Iringa" value="Iringa" />
                        <Picker.Item label="Mwanza" value="Mwanza" />
                      </Picker>
                    </>
                  ) : (
                    <>
                      <View style={{ marginTop: "2%" }}>
                        <Text style={{ marginLeft: "3%" }}>Destination:</Text>
                        <View
                          style={{
                            borderColor: "black",
                            // borderRadius: 5,
                            borderWidth: 1,
                          }}
                        >
                          <Picker
                            mode="dropdown"
                            style={{
                              backgroundColor: "white",
                            }}
                            selectedValue={destination}
                            onValueChange={(text) => setDestination(text)}
                          >
                            <Picker.Item
                              label="Dar es salaam"
                              value="Dar es salaam"
                            />
                            <Picker.Item label="Mtwara" value="Mtwara" />
                            <Picker.Item label="Songea" value="Songea" />
                            <Picker.Item label="Iringa" value="Iringa" />
                            <Picker.Item label="Mwanza" value="Mwanza" />
                          </Picker>
                        </View>
                      </View>
                    </>
                  )}
                </View>
                <View style={styles.formInput}>
                  <Pressable onPress={toggleDatePicker}>
                    <View pointerEvents="none">
                      <TextInput
                        mode="outlined"
                        editable={false}
                        left={<TextInput.Icon icon="calendar-range-outline" />}
                        value={departureDate.toDateString()}
                        label={"Departure"}
                      />
                    </View>
                  </Pressable>
                  {showPicker && (
                    <>
                      <DateTimePicker
                        testID="dateTimePicker"
                        mode="date"
                        minimumDate={new Date()}
                        display={Platform.OS === "ios" ? "spinner" : "default"}
                        value={date}
                        onChange={onChange}
                      />
                      {Platform.OS === "ios" && (
                        <Button
                          onPress={() => setShowPicker(false)}
                          style={{
                            backgroundColor: "grey",
                          }}
                          labelStyle={{
                            fontFamily: "montserrat-17",
                            color: "white",
                          }}
                        >
                          Done
                        </Button>
                      )}
                    </>
                  )}
                </View>
                <View style={styles.formInput}>
                  <TextInput
                    mode="outlined"
                    keyboardType="numeric"
                    left={<TextInput.Icon icon="account" />}
                    onChangeText={(text) => setPassengers(text)}
                    value={passengers}
                    label={"Passengers"}
                    activeOutlineColor="black"
                  />
                </View>
              </View>
              <View
                style={{
                  marginVertical: 15,
                }}
              >
                <Button
                  labelStyle={{ fontFamily: "montserrat-17", color: "white" }}
                  style={{
                    backgroundColor: COLORS.darkprimary,
                    borderRadius: 15,
                  }}
                  onPress={() => console.log("I need to go next")}
                >
                  Search
                </Button>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "85%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "overpass-reg",
                color: "black",
                marginTop: 10,
              }}
            >
              Latest Active Ticket
            </Text>
          </View>
          <View
            style={{
              width: "85%",
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
                  Ticket: #23
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
                    Tunduma
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
                  disabled={true}
                  left={<TextInput.Icon icon="calendar-range-outline" />}
                  value={departureDate.toDateString()}
                  label={"Departure"}
                />
                <TextInput
                  mode="outlined"
                  disabled
                  left={<TextInput.Icon icon="account" />}
                  onChangeText={(text) => setPassengers(text)}
                  value={"1"}
                  label={"Passengers"}
                  activeOutlineColor="black"
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: "85%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "overpass-reg",
                color: "black",
                marginTop: 10,
              }}
            >
              Popular Routes
            </Text>
          </View>
          <View
            style={{
              width: "85%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "2%",
              marginBottom: "20%",
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
                  marginVertical: 10,
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
                    Tunduma
                  </Text>
                </View>
              </View>
              <CustomLine />
              <View
                style={{
                  marginVertical: 10,
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
                    Morogoro
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
                    Dar es salaam
                  </Text>
                </View>
              </View>
              <CustomLine />
              <View
                style={{
                  marginVertical: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
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
                    Mwanza
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
                    Dodoma
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "96%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  innerContainer: {
    flex: 1,
  },
  scrollView: {
    marginTop: 12,
  },
  formInput: {
    marginTop: 15,
  },
});
