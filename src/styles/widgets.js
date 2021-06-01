import styled, { css } from "styled-components";

// Contains widgets like Button, Text box etc.

export const Button = styled.button`
  background: transparent;
  border-radius: 20px;
  border: 2px solid #b097bd;
  color: #b097bd;
  margin: 0 1em;
  font-family: Helvetica, sans-serif;
  width: 100px;
  height: 30px;
  padding: 0.25em 1em;

  &:hover {
    background: #8c49ad;
    color: white;
  }
`;
