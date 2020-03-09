import React from "react";
import Input from "./Input";
import Output from "./Output";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onBirthYearChange = this.onBirthYearChange.bind(this);
    this.onBirthMonthChange = this.onBirthMonthChange.bind(this);
    this.onGenderChange = this.onGenderChange.bind(this);
    this.onRaceChange = this.onRaceChange.bind(this);
    this.state = {
      birthYear: 2000,
      birthMonth: 1,
      gender: "",
      race: ""
    };
  }

  onBirthYearChange(year) {
    this.setState({ birthYear: year });
  }

  onBirthMonthChange(month) {
    this.setState({ birthMonth: month });
  }

  onGenderChange(gender) {
    this.setState({ gender: gender });
  }

  onRaceChange(race) {
    this.setState({ race: race });
  }

  render() {
    return (
      <div className="row-container">
        <Input
          birthYear={this.state.birthYear}
          birthMonth={this.state.birthMonth}
          gender={this.state.gender}
          race={this.state.race}
          onBirthYearChange={this.onBirthYearChange}
          onBirthMonthChange={this.onBirthMonthChange}
          onGenderChange={this.onGenderChange}
          onRaceChange={this.onRaceChange}
        />
        <Output
          birthYear={this.state.birthYear}
          birthMonth={this.state.birthMonth}
          gender={this.state.gender}
          race={this.state.race}
        />
      </div>
    );
  }
}

export default App;
