import React, { Component } from "react";
import Gameboard from "../Gameboard/index";
import Scoreboard from "../Scoreboard";
import plants from "../plantList.json";
import "./style.css";

const instructions = [
  "Click on a plant to begin the game",
  "Keep clicking!",
  "Start over!"
];

class Container extends Component {
  state = {
    direction: instructions[0],
    plantsArray: plants,
    justClicked: "",
    clicked: [],
    currentScore: 0,
    highScore: 0,
    outcome: 1
  };

  handleClick = (id, name) => {
    const clickedArray = [...this.state.clicked];
    let score = this.state.currentScore;
    let currentHighScore = this.state.highScore;
    if (currentHighScore <= score) {
      currentHighScore = score;
    }
    if (clickedArray.includes(id)) {
      this.setState({
        direction: instructions[2],
        highScore: currentHighScore,
        currentScore: 0,
        clicked: [],
        justClicked: name,
        plantsArray: this.arrayShuffle(),
        outcome: 0
      });
    } else {
      score++;
      clickedArray.push(id);

      this.setState({
        direction: instructions[1],
        currentScore: score,
        clicked: clickedArray,
        justClicked: name,
        plantsArray: this.arrayShuffle(),
        outcome: 1
      });
      console.log("doesn't include");
    }
  };

  arrayShuffle() {
    let tempArray = [...plants];
    for (let i = tempArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = tempArray[i];
      tempArray[i] = tempArray[j];
      tempArray[j] = temp;
    }
    return tempArray;
  }

  render() {
    console.log(this.state.currentScore);
    return (
      <div className="container">
        <div className="row">
          <Gameboard
            justClicked={this.state.justClicked}
            plantsArray={this.state.plantsArray}
            handleClick={this.handleClick}
            outcome={this.state.outcome}
          />
          <Scoreboard
            direction={this.state.direction}
            highScore={this.state.highScore}
            currentScore={this.state.currentScore}
          />
        </div>
      </div>
    );
  }
}

export default Container;
