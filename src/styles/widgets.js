import styled, { css } from "styled-components";

// Contains widgets like Button, Text box etc.
// Darker color code: #8c49ad
export const Button = styled.button`
  background: #b097bd;
  border-radius: 5px;
  border: 2px solid #b097bd;
  color: white;
  margin: 0 1em;
  font-family: Helvetica, sans-serif;
  font-size: 15px;
  font-weight: bold;
  width: 150px;
  height: 50px;
  margin-top: 40px;
  padding: 0.25em 1em;

  &:hover {
    background: transparent;
    color: #b097bd;
  }
`;
