import React from "react";

class RaceSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onRaceChange(event.target.value);
  }

  getRaceOptions() {
    const raceOptions = [
      "",
      "White",
      "Black",
      "Hispanic",
      "non-Hispanic White",
      "non-Hispanic Black",
      "Other"
    ];

    return raceOptions.map((race, index) => {
      return (
        <option key={index} value={race}>
          {race}
        </option>
      );
    });
  }

  render() {
    return (
      <label>
        Race:
        <select value={this.props.race} onChange={this.handleChange}>
          {this.getRaceOptions()}
        </select>
      </label>
    );
  }
}

export default RaceSelect;
