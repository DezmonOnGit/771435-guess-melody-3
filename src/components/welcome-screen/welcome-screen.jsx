import React from "react";

const WelcomeScreen = (props) => {
  // eslint-disable-next-line react/prop-types
  const {name} = props;

  return <h1>
      Hello, {name}!!!
  </h1>;
};

export default WelcomeScreen;
