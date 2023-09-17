import React, { Component } from "react";

import WheelComponent from "./wheel";
import "react-wheel-of-prizes/dist/index.css";
import "./styles.css";

import Confetti from "react-confetti";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    const segments = [
      "Yell out the first word that comes to your mind",
      "Hold your nose while you sing the chorus of your favorite song",
      "Call your dad and say you got engaged",
      "Dance for 30 seconds to a Snoop Dogg song",
      "Eat a whole raw clove of garlic",
      "Close your eyes until your next turn",
      "Take a shot",
      "Hold your drink with two hands for the rest of the evening",
      "Neck the drink of the person on your right",
      "Twerk for a minute",
    ];

    const weelColors = () => {
      let arr = [];
      let colors = ["purple", "blue"];
      segments.forEach((el) => {
        let color = colors.shift();
        arr.push(color);
        colors.push(color);
      });

      return arr;
    };
    const segColors = weelColors();

    const onFinished = (winner) => {
      this.setState({ show: winner });
    };
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "150px",
          paddingBottom: "150px",
          //background: `url(${IMAGES.background})`
        }}
      >
        {this.state.show && <Confetti />}
        <WheelComponent
          segments={segments}
          segColors={segColors}
          winningSegment={"8"}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="gray"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={true}
        />
      </div>
    );
  }
}
