import React from "react";
import { lifeTables } from "../assets/lifeTables";

function Output(props) {
  const lifeTable = getLifeTable(props.gender, props.race);
  const age = getAge(props.birthYear, props.birthMonth);
  const lifeTableRow = lifeTable[age];
  const [years, months, weeks, days] = getLifeExpectancy(lifeTableRow);
  const chance = getDeathChance(lifeTableRow);
  const portion = getPortion(Number(age), Number(years));

  return (
    <div data-testid="output-box" className="column-container">
      <div data-testid="time-boxes">
        <h1>How much time do you have left?</h1>
        <div className="time-box">{years} years </div>
        <div className="time-box">{months} months </div>
        <div className="time-box">{weeks} weeks </div>
        <div className="time-box">{days} days </div>
      </div>
      <div data-testid="chance-numbers">
        <h1>The clock is ticking...</h1>
        <h2>And you could die at any time.</h2>
        <h3>
          In fact, you have a {chance}% chance of dying before your next
          birthday.
        </h3>
        <h3>Hell, you're already {portion}% of the way through your life.</h3>
      </div>
    </div>
  );

  function getLifeTable(gender, race) {
    if (gender === "Other") gender = "";
    if (race === "Other") race = "";

    let groupDescriptor = `${race}${gender}Population`.replace(" ", "");
    if (race !== "Hispanic") {
      groupDescriptor =
        groupDescriptor.slice(0, 1).toLowerCase() + groupDescriptor.slice(1);
    }

    const lifeTable = lifeTables[groupDescriptor];

    return lifeTable ? lifeTable : lifeTables["totalPopulation"];
  }

  function getAge(year, month) {
    const millisecondsPerYear = 365.25 * 24 * 3600 * 1000;
    const thisDate = new Date();
    const birthDate = new Date(Number(year), Number(month));
    const age = ((thisDate - birthDate) / millisecondsPerYear).toFixed(0);

    return age > 0 ? age : 0;
  }

  function getLifeExpectancy(row) {
    const years = row.lifeRemaining.toFixed(2);
    const months = (years * 12).toFixed(1);
    const weeks = (years * 52).toFixed(0);
    const days = (years * 365.25).toFixed(0);

    return [years, months, weeks, days];
  }

  function getDeathChance(row) {
    return (row.deathChance * 100).toFixed(3);
  }

  function getPortion(age, years) {
    return ((100 * age) / (age + years)).toFixed(2);
  }
}

export default Output;

// TODO add current age, total projected age, projected death year/etc.
