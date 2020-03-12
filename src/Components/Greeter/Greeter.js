import React, { useContext, useState } from "react";

import { AuthContext } from "Contexts/Auth";
import TextInput from "Widgets/TextInput";
import { Button, PrimaryButton } from "Widgets/Buttons";

export default function Greeter() {
  const auth = useContext(AuthContext);
  const role = auth.isManager() ? "manager" : "";
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState(null);

  return (
    <div>
      <TextInput placeholder="Your name" value={name} onChange={setName} />
      <Button
        label="Clear"
        onClick={() => {
          setName("");
          setGreeting(null);
        }}
      />
      <PrimaryButton
        label="Submit"
        onClick={() => {
          setGreeting(`Hello ${role} ${name}!`);
        }}
      />
      <p>{greeting ? greeting : `Hello ${role} ${auth.name}!`}</p>
    </div>
  );
}
