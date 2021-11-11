import React from "react";
import classNames from "classnames";

const Button = ({ onClick, className, outline, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
};

// const Button = (props) => {
//   return (
//     <button
//       onClick={props.onClick}
//       className={classNames("button", props.className, {
//         "button--outline": props.outline,
//       })}
//     >
//       {props.children}
//     </button>
//   );
// };

// function Button(props) {
//   return (
//     <button
//       className={classNames("button", {
//         "button--outline": this.props.outline,
//       })}
//     >
//       {this.props.children}
//     </button>
//   );
// }

//class Button extends React.Component {

//     render() {
//         //return <button className={`button ${this.props.outline ? "button--outline" : ""}`}>{this.props.children}</button>
//         return <button className={classNames(
//             "button",
//             {
//             "button--outline": this.props.outline,
//             },
//         )}>{this.props.children}</button>
//     }
// }

// class Button extends React.Component {
//     render() {
//         // console.log(this.props);
//         return <button>{this.props.text}</button>
//     }
// }

// function hello(a, b) {
//     return a + b;
// }

// hello(1, 2);

export default Button;
