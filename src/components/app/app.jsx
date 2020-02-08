import React from "react";
import PropTypes from 'prop-types';

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {

  const {errorsCount} = props;

  return <React.Fragment>
    <WelcomeScreen errorsCount={errorsCount}/>
  </React.Fragment>;
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
