import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Click on play in Welcome screen`, ()=> {
  const onButtonClick = jest.fn();

  const welcomeScreen = shallow(
    <WelcomeScreen
      errorsCount={3}
      clickOnPlay={onButtonClick}/>
  );

  const playButton = welcomeScreen.find(`button.welcome__button`);

  playButton.props().onClick();

  expect(onButtonClick.mock.calls.length).toBe(1);
});
