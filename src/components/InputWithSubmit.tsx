import React, { FC, useState } from "react";
import { Button, TextInput } from "react-native";

interface InputWithSubmitProps {
  submitHandler: (value: string) => void;
}

export const InputWithSubmit: FC<InputWithSubmitProps> = ({
  submitHandler,
}) => {
  const [text, setText] = useState("");
  return (
    <>
      <TextInput
        onChangeText={setText}
        keyboardType="default"
        style={{
          height: 40,
          width: 300,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          backgroundColor: "white",
        }}
      />
      <Button title="Submit" onPress={() => submitHandler(text)} />
    </>
  );
};
