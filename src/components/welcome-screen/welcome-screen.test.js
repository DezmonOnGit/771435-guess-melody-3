import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

const errorsCount = 1;

describe(`Render Welcome screen`, () => {

  it(`<WelcomeScreen /> Should render welcome screen`, () => {
    const tree = renderer.create(<WelcomeScreen errorsCount={errorsCount}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`<WelcomeScreen /> Should render welcome screen without errorCount`, () => {
    const tree = renderer.create(<WelcomeScreen errorsCount={0}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });

});

