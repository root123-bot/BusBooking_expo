import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../constants/domain";
import { _cacheImages } from "../utils";
import { fetchAvatars } from "../utils/requests";

export const AppContext = createContext({
  isAunthenticated: false,
  usermetadata: {},
  favIcon: "heart-outline",
  toggleFavorite: false,
  lastLoginPhoneNumber: null,
  registermetadata: {},
  alreadyValidated: false,
  stillExecutingUserMetadata: true,
  resetPhoneNumber: {},
  avatars: [],
  finishedCachingAvatars: false,
  manipulateIsAunthenticated: (value) => {},
  manipulateUserMetadata: (metadata) => {},
  manipulateFavIcon: (icon) => {},
  manipulateToggleFavorite: (status) => {},
  manipulateLastLoginPhoneNumber: (phoneNumber) => {},
  addRegisterMetadata: (metadata) => {},
  clearRegisterMetadata: () => {},
  manipulateAlreadyValidated: (status) => {},
  manipulateResetPhoneNumber: (metadata) => {},
  logout: () => {},
  updateAvatars: (avatars) => {},
  manipulateFinishedCachingAvatars: (status) => {},
});

function AppContextProvider({ children }) {
  const [isAunthenticated, setIsAunthenticated] = useState(false);
  const [usermetadata, setUserMetadata] = useState({});
  const [favIcon, setFavIcon] = useState("heart-outline");
  const [toggleFavorite, setToggleFavorite] = useState(false);
  const [lastLoginPhoneNumber, setLastLoginPhoneNumber] = useState(null);
  const [registermetadata, setRegisterMetadata] = useState({});
  const [alreadyValidated, setAlreadyValidated] = useState(false);
  const [resetPhoneNumber, setResetPhoneNumber] = useState({});
  const [avatars, setAvatars] = useState([]);
  const [finishedCachingAvatars, setFinishedCachingAvatars] = useState(false);
  const [stillExecutingUserMetadata, setStillExecutingUserMetadata] =
    useState(true);

  const manipulateIsAunthenticated = (value) => {
    setIsAunthenticated(value);
  };

  function manipulateFavIcon(icon) {
    setFavIcon(icon);
  }

  function manipulateLastLoginPhoneNumber(phone_number) {
    setLastLoginPhoneNumber(phone_number);
  }

  function updateAvatars(avatars) {
    setAvatars(avatars);
  }

  function manipulateResetPhoneNumber(metadata) {
    setResetPhoneNumber((prevState) => {
      return {
        ...prevState,
        ...metadata,
      };
    });
  }

  function manipulateFinishedCachingAvatars(status) {
    setFinishedCachingAvatars(status);
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

  function logout() {
    setRegisterMetadata({});
    setAlreadyValidated(false);
    setIsAunthenticated(false);
    setUserMetadata({});
    setStillExecutingUserMetadata(true);
    setResetPhoneNumber({});
    AsyncStorage.removeItem("user_id");
  }

  const manipulateUserMetadata = (metadata) => {
    setUserMetadata((prevState) => {
      return {
        ...prevState,
        ...metadata,
      };
    });
  };

  async function executeUserMetadata() {
    let user_id = await AsyncStorage.getItem("user_id");
    let phone_number = await AsyncStorage.getItem("phone_number");
    setLastLoginPhoneNumber(phone_number);

    if (user_id) {
      setIsAunthenticated(true);
      fetch(`${BASE_URL}/api/userdetails/`, {
        method: "POST",
        body: JSON.stringify({
          user_id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status !== 200) {
            if (response.status === 404) {
              throw new Error(`Unrecognized user group ${user_id}`);
            }
            response.json().then((data) => {
              throw new Error(data.details);
            });
          }
          return response.json();
        })
        .then(async (data) => {
          setUserMetadata(data);

          if (data.usergroup.toLowerCase() === "passenger") {
            // fetch again the notifications etc
          }
        })
        .catch((err) => {
          if (
            err.message
              .toLowerCase()
              .includes("Unrecognized user".toLowerCase())
          ) {
            // delete that user... i don't care about the result...

            const splitted = err.message.split(" ");
            const user_id = splitted[splitted.length - 1];
            fetch(`${BASE_URL}/api/delete_user/`, {
              method: "POST",
              body: JSON.stringify({
                user_id,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((response) => response.json())
              .then((data) => console.log("THIS IS RESOLVED RESPONSE ", data))
              .catch((err) =>
                console.log("THIS IS ERROR MESSAGE ", err.message)
              );
            console.log("I SHOULD LOGOUT THE USER");
            logout();
            setStillExecutingUserMetadata(false);
          } else {
            console.log("Whats happened ", err.message);

            logout();

            setStillExecutingUserMetadata(false);
          }
        });
    } else {
      setStillExecutingUserMetadata(false);
      // also you
    }
  }

  async function getAvatars() {
    try {
      const data = await fetchAvatars();
      setAvatars(data);
    } catch (err) {
      console.log("Error fetching avatars ", err.message);
    }
  }

  useEffect(() => {
    if (avatars.length > 0) {
      _cacheImages(avatars, ({ status }) => {
        console.log("Done caching avatars status: ", status);
        setFinishedCachingAvatars(true);
      });
    }
  }, [avatars.length]);

  useEffect(() => {
    if (usermetadata) {
      setStillExecutingUserMetadata(false);
    }
  }, [usermetadata]);

  useEffect(() => {
    executeUserMetadata();
    getAvatars();
  }, []);

  const value = {
    isAunthenticated,
    usermetadata,
    favIcon,
    toggleFavorite,
    lastLoginPhoneNumber,
    registermetadata,
    alreadyValidated,
    stillExecutingUserMetadata,
    resetPhoneNumber,
    avatars,
    finishedCachingAvatars,
    manipulateIsAunthenticated,
    manipulateUserMetadata,
    manipulateFavIcon,
    manipulateToggleFavorite,
    manipulateLastLoginPhoneNumber,
    addRegisterMetadata,
    clearRegisterMetadata,
    manipulateAlreadyValidated,
    logout,
    manipulateResetPhoneNumber,
    updateAvatars,
    manipulateFinishedCachingAvatars,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
