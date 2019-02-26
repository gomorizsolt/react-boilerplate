import React from "react";
import { BasicDiv, List } from "./App.style";
import RB from "../../RB.svg";

const app = () => (
  <BasicDiv>
    <img src={RB} alt="React Boilerplate" />
    <List>
      <li>Webpack</li>
      <li>Babel</li>
      <li>Eslint</li>
      <li>Jest & Enzyme</li>
      <li>Pre-commit</li>
      <li>CSS loader and styled-component</li>
      <li>Prettier</li>
      <li>Register Service Worker</li>
      <li>Heroku deployment</li>
      <li>Examples</li>
    </List>
  </BasicDiv>
);

export default app;
