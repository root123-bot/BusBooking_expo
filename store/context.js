import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext({
  isAunthenticated: false,
  usermetadata: {},
  manipulateIsAunthenticated: (value) => {},
  manipulateUserMetadata: (metadata) => {},
});

function AppContextProvider({ children }) {
  const [isAunthenticated, setIsAunthenticated] = useState(false);
  const [usermetadata, setUserMetadata] = useState({});

  const manipulateIsAunthenticated = (value) => {
    setIsAunthenticated(value);
  };

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
    manipulateIsAunthenticated,
    manipulateUserMetadata,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
