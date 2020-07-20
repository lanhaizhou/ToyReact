import { ToyReact, Component } from "./ToyReact";

// No.3
class MyComponent extends Component {
  render() {
    return <div>
        <span>Hello </span>
        <span>ToyReact ！</span>
        <div>
            {this.children}
        </div>
    </div>;
  }
}
const a = (
  <MyComponent name="a" id="ida">
    <div>-_-</div>
  </MyComponent>
);

ToyReact.render(a, document.body);

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
