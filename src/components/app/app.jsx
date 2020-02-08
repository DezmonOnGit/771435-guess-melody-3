import React from "react";
import PropTypes from 'prop-types';

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {

  const {errorsCount, clickOnPlay} = props;

  return <React.Fragment>
    <WelcomeScreen
    errorsCount={errorsCount}
    clickOnPlay={clickOnPlay}
    />
  </React.Fragment>;
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  clickOnPlay: PropTypes.func
};

export default App;
