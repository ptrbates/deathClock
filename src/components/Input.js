import React from "react";
import BirthDateSelect from "./BirthDateSelect";
import RaceGenderSelect from "./RaceGenderSelect";

function Input(props) {
  return (
    <div data-testid="input-box" className="column-container">
      <legend>Enter some of your information:</legend>
      <fieldset>
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
      </fieldset>
    </div>
  );
}

export default Input;
