import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Keyboard,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../../constants/colors";
import SearchBar from "../../../components/SearchBar";
import { TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
// import DatePicker from "react-native-date-picker";
import DateTimePicker from "@react-native-community/datetimepicker";

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
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState("date");
  // const [show, setShow] = useState(false);
  const [departureDate, setDepartureDate] = useState(new Date());

  const toggleDatePicker = () => {
    console.log("IM CALLED AGAIN");
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    console.log("TYPE ", type);
    if (type === "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        console.log("no here");
        toggleDatePicker();
        setDepartureDate(currentDate);
      } else {
        console.log("im here");
        // toggleDatePicker();
      }
    }

    // const currentDate = selectedDate;
    // setShow(false);
    // setDate(currentDate);
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
        <View
          style={{
            width: "85%",
            marginLeft: "auto",
            marginRight: "auto",
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
                  // marginLeft: 15,
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
                          left={<TextInput.Icon icon="account" />}
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
                          left={<TextInput.Icon icon="account" />}
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
                      // onChangeText={(text) => setDepartureDate}
                      value={departureDate.toDateString()}
                      label={"Departure"}
                    />
                  </View>
                </Pressable>
                {showPicker && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    mode="date"
                    display="spinner"
                    value={date}
                    onChange={onChange}
                  />
                )}
              </View>
            </View>
          </View>
        </View>
        {/* <View
          style={{
            flex: 1,
            backgroundColor: COLORS.background,
          }}
        >
          <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
              <SearchBar searchQueryHandler={() => console.log("im here")} />
              <View
                style={{
                  marginVertical: 15,
                }}
              >
                <RouterCard />
              </View>
            </View>
          </SafeAreaView>
        </View> */}
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
