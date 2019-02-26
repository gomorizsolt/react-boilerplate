import styled, { keyframes } from "styled-components";

const flashEffect = keyframes`
  0% {
    opacity: 0;
  }

  25% {
    opacity: 0.5;
  }

  50% {
    opacity: 1;
  }

  75% {
    opacity: 0.5;
  }

  100% {
    opacity: 0;
  }
`;

export const BasicDiv = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;

  & > img {
    animation: 4s ${flashEffect} linear infinite;
    max-width: 25%;
    max-height: 25%;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  font-size: 1.5em;
  font-weight: 600;

  @media (max-width: 996px) {
    font-size: 1em;
  }
`;
