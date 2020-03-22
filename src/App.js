import React, { useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import "./App.css";

function App() {
  const [birthYear, setBirthYear] = useState(2020);
  const [birthMonth, setBirthMonth] = useState(1);
  const [gender, setGender] = useState("");
  const [race, setRace] = useState("");

  function onChange(name, value) {
    switch (name) {
      case "birthYear":
        setBirthYear(value);
        break;
      case "birthMonth":
        setBirthMonth(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "race":
        setRace(value);
        break;
    }
  }

  return (
    <div data-testid="main-app" className="row-container">
      <Input
        birthYear={birthYear}
        birthMonth={birthMonth}
        gender={gender}
        race={race}
        onChange={onChange}
      />
      <Output
        birthYear={birthYear}
        birthMonth={birthMonth}
        gender={gender}
        race={race}
      />
    </div>
  );
}

export default App;
