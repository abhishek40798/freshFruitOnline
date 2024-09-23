import { colors } from '@/constants';
import React from "react";
import styled from 'styled-components';

const BoxedButton = styled.a`
  font-family: "Poppins", sans-serif;
  display: inline-block;
  background-color: ${colors.primaryColor};
  color: ${colors.white};
  border: 2px solid ${colors.primaryColor};
  padding: 10px 40px;
  border-radius: 50px;
  &:hover {
    background-color: transparent;
  }
`;

interface Props {
    icon?: React.ReactNode;
    text: string;
}

const FButton = (props : Props) => {
    const {text,icon} = props;
  return (
    <BoxedButton>
        {text}
    </BoxedButton>
  );
};

export default FButton;