import React from "react";

function BirthDateSelect(props) {
  return (
    <React.Fragment>
      <label data-testid="birthyear-select">
        Birth year:
        <select name="birthYear" value={props.birthYear} onChange={onChange}>
          {getDateOptions("year")}
        </select>
      </label>
      <br />
      <label data-testid="birthmonth-select">
        Birth month:
        <select name="birthMonth" value={props.birthMonth} onChange={onChange}>
          {getDateOptions("month")}
        </select>
      </label>
    </React.Fragment>
  );

  function onChange(event) {
    props.onChange(event.target.name, event.target.value);
  }

  function getDateOptions(unit) {
    const result = [""];
    const thisYear = new Date().getFullYear();
    const [start, end] = unit === "year" ? [thisYear, thisYear - 100] : [12, 0];

    for (let element = start; element > end; element--) {
      result.push(
        <option key={element} value={element}>
          {element}
        </option>
      );
    }

    return result;
  }
}

export default BirthDateSelect;
