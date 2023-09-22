import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext({
  isAunthenticated: false,
  usermetadata: {},
  favIcon: "heart-outline",
  toggleFavorite: false,
  lastLoginPhoneNumber: null,
  registermetadata: {},
  alreadyValidated: false,
  manipulateIsAunthenticated: (value) => {},
  manipulateUserMetadata: (metadata) => {},
  manipulateFavIcon: (icon) => {},
  manipulateToggleFavorite: (status) => {},
  manipulateLastLoginPhoneNumber: (phoneNumber) => {},
  addRegisterMetadata: (metadata) => {},
  clearRegisterMetadata: () => {},
  manipulateAlreadyValidated: (status) => {},
});

function AppContextProvider({ children }) {
  const [isAunthenticated, setIsAunthenticated] = useState(false);
  const [usermetadata, setUserMetadata] = useState({});
  const [favIcon, setFavIcon] = useState("heart-outline");
  const [toggleFavorite, setToggleFavorite] = useState(false);
  const [lastLoginPhoneNumber, setLastLoginPhoneNumber] = useState(null);
  const [registermetadata, setRegisterMetadata] = useState({});
  const [alreadyValidated, setAlreadyValidated] = useState(false);

  const manipulateIsAunthenticated = (value) => {
    setIsAunthenticated(value);
  };

  function manipulateFavIcon(icon) {
    setFavIcon(icon);
  }

  function manipulateLastLoginPhoneNumber(phone_number) {
    setLastLoginPhoneNumber(phone_number);
  }

  function manipulateAlreadyValidated(status) {
    setAlreadyValidated(status);
  }

  function manipulateToggleFavorite(status) {
    setToggleFavorite(status);
  }

  function addRegisterMetadata(metadata) {
    setRegisterMetadata((prevState) => {
      return {
        ...prevState,
        ...metadata,
      };
    });
  }

  function clearRegisterMetadata() {
    setRegisterMetadata({});
  }

  const manipulateUserMetadata = (metadata) => {
    setUserMetadata((prevState) => {
      return {
        ...prevState,
        ...metadata,
      };
    });
  };

  const value = {
    isAunthenticated,
    usermetadata,
    favIcon,
    toggleFavorite,
    lastLoginPhoneNumber,
    registermetadata,
    alreadyValidated,
    manipulateIsAunthenticated,
    manipulateUserMetadata,
    manipulateFavIcon,
    manipulateToggleFavorite,
    manipulateLastLoginPhoneNumber,
    addRegisterMetadata,
    clearRegisterMetadata,
    manipulateAlreadyValidated,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
