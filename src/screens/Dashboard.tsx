import React, { FC, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text } from "../components/Text";
import { Screen } from "../components/Screen";
import { useEffect } from "react";
import { Button, TextInput } from "react-native";
import { InputWithSubmit } from "../components/InputWithSubmit";
import { Welcome } from "./Welcome";
import { useAuth } from "../authContext";

export const Dashboard: FC = () => {
  const { user, clearUser } = useAuth();

  return (
    <Screen>
      <Text type="title">Hello, {user}</Text>
      <Button title="Clear user" onPress={() => clearUser()} />
    </Screen>
  );
};
