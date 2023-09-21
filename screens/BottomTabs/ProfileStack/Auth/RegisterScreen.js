import React, { memo, useContext, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Background } from "../../../../components/ui";
import PhoneInput from "react-native-phone-number-input";
import { TextInput, Button, HelperText } from "react-native-paper";
import { AppContext } from "../../../../store/context";
import { COLORS } from "../../../../constants/colors";

function RegisterScreen({ route, navigation }) {
  const phoneInput = useRef(null);
  const { ugroup } = route.params ? route.params : { ugroup: undefined };

  const [phone, setPhone] = useState({ value: "", isValid: false });
  const [formattedValue, setFormattedValue] = useState("+255"); // +258 is for mozambique, MZ is its code

  const jisajiliHandler = () => {};

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>
            {ugroup ? "WEKA TAARIFA" : "CREATE ACCOUNT"}
          </Text>

          <View style={styles.formInput}>
            <PhoneInput
              ref={phoneInput}
              defaultValue={phone.value}
              defaultCode="TZ"
              layout="first"
              onChangeText={(text) => {
                setPhone({ value: text, isValid: true });
              }}
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
              }}
              containerStyle={{
                width: "100%",
                backgroundColor: COLORS.light,
              }}
              textContainerStyle={{
                backgroundColor: COLORS.light,
              }}
              withDarkTheme={false}
              withShadow
              autoFocus={false}
            />
          </View>
          <HelperText
            style={{
              color: COLORS.light,
            }}
          >
            By continuing you confirm that you are authorized to use this phone
            number & agree to receive an SMS text.
          </HelperText>
          <Button
            buttonColor={COLORS.primary}
            textColor={COLORS.thirdary}
            labelStyle={{
              fontFamily: "montserrat-17",
            }}
            // loading={loading}
            mode="contained"
            // onPress={jisajiliHandler}
            onPress={() => navigation.navigate("VerifyOTPScreen")}
          >
            {ugroup ? "Continue" : "Next"}
          </Button>
        </View>
      </View>
    </Background>
  );
}

export default memo(RegisterScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "96%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: COLORS.darkprimary,
    borderRadius: 10,
    padding: 15,
  },
  title: {
    fontFamily: "montserrat-17",
    color: COLORS.light,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  formInput: {
    marginVertical: "2%",
  },
});
