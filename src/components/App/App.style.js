import styled from "styled-components";

export const BasicDiv = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;

  & > img {
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
