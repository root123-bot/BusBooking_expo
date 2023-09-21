import React, { memo, useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, Keyboard } from "react-native";
import { TransparentPopUpIconMessage } from "../../../../components/Messages";
import { AppContext } from "../../../../store/context";
import { Background } from "../../../../components/ui";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS } from "../../../../constants/colors";
import * as Device from "expo-device";
import { Button, HelperText } from "react-native-paper";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { BASE_URL } from "../../../../utils/domain";

function SetPinScreen({ navigation, route }) {
  const AppCtx = useContext(AppContext);
  const { reset } = route.params ? route.params : { reset: false };

  const [PIN, setPIN] = useState("");
  const [showAnimation, setShowAnimation] = useState(false);
  const [formSubmitLoader, setFormSubmitLoader] = useState(false);
  const [message, setMessage] = useState("");
  const [icon, setIcon] = useState("");

  const savePinHandler = async () => {};

  return (
    <Background>
      <View
        style={{
          flex: 1,
          position: "relative",
        }}
      >
        <View
          style={styles.container}
          pointerEvents={formSubmitLoader ? "none" : "auto"}
        >
          <View
            style={{
              flex: 1,
              display: formSubmitLoader ? "flex" : "none",
              height: 150,
              width: 150,
              alignSelf: "center",
              position: "absolute",
              top: "40%",
              zIndex: 10,
            }}
          >
            <TransparentPopUpIconMessage
              messageHeader={message}
              icon={icon}
              inProcess={showAnimation}
            />
          </View>

          <View style={styles.innerContainer}>
            <Text style={styles.header}>Set Login PIN</Text>
            <HelperText style={styles.subheader}>
              You will use this pin to login to your account.
            </HelperText>

            <OTPInputView
              onCodeChanged={(msimbo) => setPIN(msimbo)}
              selectionColor={COLORS.light}
              style={{
                width: "80%",
                height: 100,
                color: "grey",
              }}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              autoFocusOnLoad={false}
              pinCount={4}
            />
            <Button
              mode="contained"
              loading={formSubmitLoader}
              labelStyle={{
                fontFamily: "montserrat-17",
              }}
              style={{
                backgroundColor: COLORS.primary,
              }}
              onPress={savePinHandler}
            >
              Continue
            </Button>
          </View>
        </View>
      </View>
    </Background>
  );
}

export default SetPinScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "96%",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "100%",
    padding: 15,
    backgroundColor: COLORS.darkprimary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  header: {
    fontSize: 20,
    fontFamily: "montserrat-17",
    color: COLORS.light,
  },
  subheader: {
    fontFamily: "overpass-reg",
    textAlign: "center",
    color: COLORS.light,
  },
  underlineStyleBase: {
    width: 50,
    height: 55,
    borderColor: COLORS.light,
    color: COLORS.light,
    borderWidth: 2,
  },

  underlineStyleHighLighted: {
    borderColor: COLORS.light,
  },
});
