import { BASE_URL } from "../constants/domain";

export const getOTP = async (phone_number) => {
  console.log("Full url ", `${BASE_URL}/api/sendotp/`);
  console.log("THIS IS PHONE NUMBER ", phone_number);
  return fetch(`${BASE_URL}/api/sendotp/`, {
    method: "POST",
    body: JSON.stringify({
      phone_number: phone_number,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log("This is status code ", response.status);
      if (response.status === 200) {
        return response.json();
      } else {
        response.json().then((output) => {
          console.log("OUTPUT ", output);
          throw new Error(output);
        });
      }
    })
    .then((data) => Promise.resolve({ data }))
    .catch((error) => {
      return Promise.reject({ error });
    });
};

export const validateOTP = async (phone_number, otp) => {
  return fetch(`${BASE_URL}/api/validateotp/`, {
    method: "POST",
    body: JSON.stringify({
      phone_number,
      otp,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        response.json().then((output) => {
          throw new Error(output);
        });
      }
    })
    .then((data) => Promise.resolve({ data }))
    .catch((error) => Promise.reject({ error }));
};

export const registerUser = async (phone_number, usergroup, pin, deviceID) => {
  return fetch(`${BASE_URL}/api/register/`, {
    method: "POST",
    body: JSON.stringify({
      phone_number,
      usergroup,
      pin,
      deviceID,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        response.json().then((output) => {
          throw new Error(output);
        });
      }
    })
    .then((data) => Promise.resolve({ data }))
    .catch((error) => Promise.reject({ error }));
};
