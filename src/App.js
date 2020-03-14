import React from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      birthYear: 2020,
      birthMonth: 1,
      gender: "",
      race: ""
    };
  }

  onChange(name, value) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div data-testid="main-app" className="row-container">
        <Input
          birthYear={this.state.birthYear}
          birthMonth={this.state.birthMonth}
          gender={this.state.gender}
          race={this.state.race}
          onChange={this.onChange}
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
