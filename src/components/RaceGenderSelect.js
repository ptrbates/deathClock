import React from "react";

function RaceGenderSelect(props) {
  return (
    <React.Fragment>
      <label data-testid="gender-select">
        Gender:
        <select name="gender" value={props.gender} onChange={onChange}>
          {getOptions(["", "Female", "Male", "Other"])}
        </select>
      </label>
      <br />
      <label data-testid="race-select">
        Race:
        <select name="race" value={props.race} onChange={onChange}>
          {getOptions([
            "",
            "White",
            "Black",
            "Hispanic",
            "non-Hispanic White",
            "non-Hispanic Black",
            "Other"
          ])}
        </select>
      </label>
    </React.Fragment>
  );

  function onChange(event) {
    props.onChange(event.target.name, event.target.value);
  }

  function getOptions(elementArray) {
    return elementArray.map((element, index) => {
      return (
        <option key={index} value={element}>
          {element}
        </option>
      );
    });
  }
}

export default RaceGenderSelect;
