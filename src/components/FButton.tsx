import { colors } from "@/constants";
import { Button, ButtonProps } from "@mui/material";
import React from "react";
import styled from "styled-components";

const BoxedButton = styled(Button)`
  font-family: "Poppins", sans-serif;
  display: flex;
  background-color: ${colors.primaryColor};
  color: ${colors.white} ;
  border: 2px solid ${colors.primaryColor};
  padding: 10px 40px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  width: fit-content;
  cursor: pointer;
  margin: auto;
  &:hover {
    background-color: transparent;
    color:  ${colors.primaryColor} !important
  }
`;

interface Props extends ButtonProps {
  icon?: React.ReactNode;
  text: string;
}

const FButton = (props: Props) => {
  const { text, icon, ...prop } = props;
  return (
    <BoxedButton {...prop}>
      {icon && icon}
      {text}
    </BoxedButton>
  );
};

export default FButton;
