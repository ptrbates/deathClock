import React from "react";

class GenderSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onGenderChange(event.target.value);
  }

  getGenderOptions() {
    const genderOptions = ["", "Female", "Male", "Other"];

    return genderOptions.map((gender, index) => {
      return (
        <option key={index} value={gender}>
          {gender}
        </option>
      );
    });
  }

  render() {
    return (
      <label>
        Gender:
        <select value={this.props.gender} onChange={this.handleChange}>
          {this.getGenderOptions()}
        </select>
      </label>
    );
  }
}

export default GenderSelect;
