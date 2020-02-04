import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {name} = props;

  return <React.Fragment>
    <WelcomeScreen name={name ? name : `Stranger`}/>
  </React.Fragment>;
};

export default App;
