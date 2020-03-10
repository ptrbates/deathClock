import React from "react";
import BirthDateSelect from "./BirthDateSelect";
import GenderSelect from "./GenderSelect";
import RaceSelect from "./RaceSelect";

class Input extends React.Component {
  render() {
    return (
      <div className="column-container">
        <h1>Enter some of your information:</h1>
        <BirthDateSelect
          birthYear={this.props.birthYear}
          onBirthYearChange={this.props.onBirthYearChange}
          birthMonth={this.props.birthMonth}
          onBirthMonthChange={this.props.onBirthMonthChange}
        />
        <br />
        <GenderSelect
          gender={this.props.gender}
          onGenderChange={this.props.onGenderChange}
        />
        <br />
        <RaceSelect
          race={this.props.race}
          onRaceChange={this.props.onRaceChange}
        />
      </div>
    );
  }
}

export default Input;
