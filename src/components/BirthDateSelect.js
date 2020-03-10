import React from "react";

class BirthDateSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
  }

  handleYearChange(event) {
    this.props.onBirthYearChange(event.target.value);
  }

  handleMonthChange(event) {
    this.props.onBirthMonthChange(event.target.value);
  }

  getYearOptions() {
    const thisYear = new Date().getFullYear();
    const years = [];

    for (let year = thisYear; year > thisYear - 100; year--) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }

    return years;
  }

  getMonthOptions() {
    const months = [];

    for (let month = 1; month <= 12; month++) {
      months.push(
        <option key={month} value={month}>
          {month}
        </option>
      );
    }

    return months;
  }

  render() {
    return (
      <label>
        Birth year:
        <select value={this.props.birthYear} onChange={this.handleYearChange}>
          {this.getYearOptions()}
        </select>
        <br />
        Birth month:
        <select value={this.props.birthMonth} onChange={this.handleMonthChange}>
          {this.getMonthOptions()}
        </select>
      </label>
    );
  }
}

export default BirthDateSelect;
