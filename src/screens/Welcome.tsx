import React, { FC } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { InputWithSubmit } from "../components/InputWithSubmit";
import { Screen } from "../components/Screen";
import { Text } from "../components/Text";

interface WelcomeProps {
  userHandler: (username: string) => void;
}

export const Welcome: FC<WelcomeProps> = ({ userHandler }) => {
  const storeUsername = async (username: string) => {
    try {
      await AsyncStorage.setItem("golfappUsername", username);
      userHandler(username);
    } catch (e) {
      console.log("Error storing username", e);
    }
  };
  return (
    <Screen>
      <Text type="title">Welcome to PuttPal.</Text>
      <Text type="body">What is your name?</Text>
      <InputWithSubmit submitHandler={storeUsername} />
    </Screen>
  );
};
