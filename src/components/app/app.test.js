import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const errorsCount = 1;

describe(`Render App`, () => {

  it(`<App /> Should render App`, () => {
    const tree = renderer.create(<App errorsCount={errorsCount}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });

});

