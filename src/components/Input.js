import React from "react";
import BirthDateSelect from "./BirthDateSelect";
import RaceGenderSelect from "./RaceGenderSelect";

function Input(props) {
  return (
    <div data-testid="input-box" className="column-container">
      <h1>Enter some of your information:</h1>
      <BirthDateSelect
        birthYear={props.birthYear}
        birthMonth={props.birthMonth}
        onChange={props.onChange}
      />
      <br />
      <RaceGenderSelect
        gender={props.gender}
        race={props.race}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
