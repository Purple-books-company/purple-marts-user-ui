import styled, { css } from "styled-components";
import { Lora } from "../themes/font-styles";
import { DarkShade } from "../themes/color-theme";
import { Form } from "react-bootstrap";

export const FormSub = styled(Form)`
  width: 40%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 0px) and (max-width: 568px) {
    width: 100%;
    height: 10%;
  }
`;

export const FooterIcon = styled.div`
  font-size: 35px;
  :hover {
    font-size: 40px;
  }
  @media (min-width: 0px) and (max-width: 568px) {
    font-size: 25px;
    :hover {
      font-size: 30px;
    }
  }
`;

export const FooterBody = styled.div`
  background-color: ${DarkShade}!important;
  /* position: fixed; */
  height: auto;
  /* bottom: 0;
  width: 100%; */
`;

export const Head = styled.div`
  font-family: Calibri;
  font-size: 20px;
  color: white;
`;

export const AdList = styled.li`
  font-family: ${Lora};
  font-size: 16px;
  color: white;
  ${(props) =>
    props.head &&
    css`
      font-size: 20px;
    `}
`;

export const TopList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Padding = styled.div`
  padding-left: ($spacer * 0.5) !important;
  padding-right: ($spacer * 0.5) !important;
`;
