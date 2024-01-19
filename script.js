const keydata = {
  Q: {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    name: "Heater 1",
    no: 81 },

  W: {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    name: "Heater 2",
    no: 87 },

  E: {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    name: "Heater 3",
    no: 69 },

  A: {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    name: "Heater 4",
    no: 65 },

  S: {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    name: "Clap",
    no: 83 },

  D: {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    name: "Open-HH",
    no: 68 },

  Z: {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    name: "Kick-n'-Hat",
    no: 90 },

  X: {
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    name: "Kick",
    no: 88 },

  C: {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    name: "Closed-HH",
    no: 67 } };


class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.handlepress = this.handlepress.bind(this);
    this.playSound = this.playSound.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handlepress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlepress);
  }
  playSound() {
    this.props.updateMsg(keydata[this.props.letter].name);
    const music = document.getElementById(this.props.letter);
    music.currentTime = 0;
    music.play();
  }
  handlepress(e) {
    if (e.keyCode == this.props.letter.charCodeAt()) {
      this.playSound();
    }
  }
  render() {
    var ID = "button " + this.props.letter;
    return /*#__PURE__*/(
      React.createElement("button", { id: ID,
        onClick: this.playSound,
        class: "drum-pad" },
      this.props.letter, /*#__PURE__*/
      React.createElement("audio", { id: this.props.letter, src: keydata[this.props.letter].src, class: "clip" })));


  }}

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMessage: "PRESS ANY KEY" };

    this.updateMsg = this.updateMsg.bind(this);
  }
  updateMsg(e) {
    this.setState({
      displayMessage: e });

  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
    React.createElement("h1", null, "BEAT MACHINE"), /*#__PURE__*/
    React.createElement("div", { className: "main-box", id: "drum-machine" }, /*#__PURE__*/
    React.createElement("div", { class: "displaymsg", id: "display" }, this.state.displayMessage), /*#__PURE__*/
    React.createElement("div", { className: "box btn-box", id: "button" }, /*#__PURE__*/
    React.createElement(Pad, { letter: "Q", updateMsg: this.updateMsg }), /*#__PURE__*/
    React.createElement(Pad, { letter: "W", updateMsg: this.updateMsg }), /*#__PURE__*/
    React.createElement(Pad, { letter: "E", updateMsg: this.updateMsg }), /*#__PURE__*/
    React.createElement(Pad, { letter: "A", updateMsg: this.updateMsg }), /*#__PURE__*/
    React.createElement(Pad, { letter: "S", updateMsg: this.updateMsg }), /*#__PURE__*/
    React.createElement(Pad, { letter: "D", updateMsg: this.updateMsg }), /*#__PURE__*/
    React.createElement(Pad, { letter: "Z", updateMsg: this.updateMsg }), /*#__PURE__*/
    React.createElement(Pad, { letter: "X", updateMsg: this.updateMsg }), /*#__PURE__*/
    React.createElement(Pad, { letter: "C", updateMsg: this.updateMsg }))));



  }}

const box = document.getElementById("app");
ReactDOM.render( /*#__PURE__*/React.createElement(DrumMachine, null), box);