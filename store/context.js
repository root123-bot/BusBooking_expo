import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext({
  isAunthenticated: false,
  usermetadata: {},
  favIcon: "heart-outline",
  toggleFavorite: false,
  lastLoginPhoneNumber: null,
  manipulateIsAunthenticated: (value) => {},
  manipulateUserMetadata: (metadata) => {},
  manipulateFavIcon: (icon) => {},
  manipulateToggleFavorite: (status) => {},
  manipulateLastLoginPhoneNumber: (phoneNumber) => {},
});

function AppContextProvider({ children }) {
  const [isAunthenticated, setIsAunthenticated] = useState(false);
  const [usermetadata, setUserMetadata] = useState({});
  const [favIcon, setFavIcon] = useState("heart-outline");
  const [toggleFavorite, setToggleFavorite] = useState(false);
  const [lastLoginPhoneNumber, setLastLoginPhoneNumber] = useState(null);

  const manipulateIsAunthenticated = (value) => {
    setIsAunthenticated(value);
  };

  function manipulateFavIcon(icon) {
    setFavIcon(icon);
  }

  function manipulateLastLoginPhoneNumber(phone_number) {
    setLastLoginPhoneNumber(phone_number);
  }

  function manipulateToggleFavorite(status) {
    setToggleFavorite(status);
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
    manipulateIsAunthenticated,
    manipulateUserMetadata,
    manipulateFavIcon,
    manipulateToggleFavorite,
    manipulateLastLoginPhoneNumber,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
