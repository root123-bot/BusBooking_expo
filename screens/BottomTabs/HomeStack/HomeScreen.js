import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../../constants/colors";
import SearchBar from "../../../components/SearchBar";

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
      </View>
      <View
        style={{
          width: "40%",
          height: 170,
          backgroundColor: COLORS.light,
          borderRadius: 15,
          shadowColor: "#DEE2E6",
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
  return (
    <>
      <StatusBar style="dark" />
      <View
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
});
