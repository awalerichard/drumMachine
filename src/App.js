import "./App.css";
import React from "react";
/* 
const DrumPad = (props) => {
  return (
    <div class="drum-pad" id={props.song}>
      <audio class="clip" id={props.key} src={props.url}></audio>
      {props.key}
    </div>
  );
}; */
const DrumPad = ({ drumKey, song, handleClick, url }) => {
  return (
    <button className="drum-pad" id={song} onClick={handleClick(drumKey, song)}>
      {drumKey}
      <audio className="clip" src={url} id={drumKey} />
    </button>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drumPads: [
        {
          key: "Q",
          song: "Heater-1",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        },
        {
          key: "W",
          song: "Heater-2",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        },
        {
          key: "E",
          song: "Heater-3",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        },
        {
          key: "A",
          song: "Heater-4",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        },
        {
          key: "S",
          song: "Heater-6",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        },
        {
          key: "D",
          song: "Dsc_Oh",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        },
        {
          key: "Z",
          song: "Kick_n_Hat",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        },
        {
          key: "X",
          song: "RP4_KICK_1",
          url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        },
        {
          key: "C",
          song: "Cev_H2",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        },
      ],

      currentSongText: "",
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    // will click the button when the corresponding key pressed
    window.addEventListener("keypress", this.handleKeyPress);
  }

  handleButtonClick = (key, song) => {
    return () => {
      document.getElementById(key).play();
      this.setState({
        currentSongText: song,
      });
    };
  };
  handleKeyPress(e) {
    const pad = this.state.drumPads.find(
      (item) => item.key === e.key.toUpperCase()
    );
    // click the button
    if (pad) document.getElementById(pad.song).click();
  }
  render() {
    return (
      <div id="drum-machine">
        <div id="display">
          <div className="drum-box">
            <div id="display-pads">
              {this.state.drumPads.map((item) => (
                <DrumPad
                  song={item.song}
                  key={item.key}
                  drumKey={item.key}
                  handleClick={this.handleButtonClick}
                  url={item.url}
                />
              ))}
            </div>
          </div>
          <div className="songTitle">
            <p id="drum-box" className="current-text">
              {this.state.currentSongText}
            </p>
          </div>
        </div>
      </div>
    );
  }
  componentWillUnmount() {
    window.removeEventListener("keypress", this.handleKeyPress);
  }
}

export default App;
