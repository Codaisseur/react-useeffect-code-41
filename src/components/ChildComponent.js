import React, { useState } from "react";

export default function ChildComponent(props) {
  const [surname, setSurname] = useState("Vandermeer");

  const doSomething = () => {
    console.log("is this called ??");
    setSurname("van Evert");
  };

  return (
    <li>
      Name: {props.name} {surname}
      <button onClick={doSomething}>change surname</button>
    </li>
  );
}

// // =======
// //
// // BELOW: NOT RELEVANT FOR NOW,
// //
// //  but interesting to see, and maybe useful
// //  for navigating question/answer sites like
// //  StackOverflow on the internet:
// // The exact same component, same ingredients,
// //  but writting in class-component style instead
// //  of functional component style.
// //
// // =======

// export default class ChildComponent extends React.Component {
//   state = {
//     surname: "Vandermeer",
//   };

//   doSomething = () => {
//     console.log("is this called ??");
//     this.setState({ surname: "van Evert" });
//   };

//   render() {
//     return (
//       <li>
//         Name: {this.props.name} {this.state.surname}
//         <button onClick={this.doSomething}>change surname</button>
//       </li>
//     );
//   }
// }
