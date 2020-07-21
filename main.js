import { ToyReact, Component } from "./ToyReact";

// No.4
class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: "x" })}>
        {this.state.value || ""}
      </button>
    );
  }
}

class Board extends Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
const a = <Board />;

ToyReact.render(a, document.body);

// No.3
// class MyComponent extends Component {
//   render() {
//     return (
//       <div>
//         <span>Hello </span>
//         <span>ToyReact ！</span>
//         <div>{this.children}</div>
//       </div>
//     );
//   }
// }
// const a = (
//   <MyComponent name="a" id="ida">
//     <div>-_-</div>
//   </MyComponent>
// );

// ToyReact.render(a, document.body);

// No.2
// const a = (
//   <div name="a" id="ida">
//     <span>1</span>
//     <span>2</span>
//     <span>3</span>
//   </div>
// );

// console.log(a);
// document.body.appendChild(a);

// 以下是被翻译出来的代码

// var a = ToyReact.createElement(
//   "div",
//   {
//     name: "a",
//     id: "ida",
//   },
//   ToyReact.createElement("span", null, "1"),
//   ToyReact.createElement("span", null, "2"),
//   ToyReact.createElement("span", null, "3")
// );
// console.log(a);
// document.body.appendChild(a);

// No.1
// require("./lib");
// console.log("main");
