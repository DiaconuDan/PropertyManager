import React, { FunctionComponent } from "react";
import { BoxWrapper, BoxNumber, BoxText } from "./styles";

type BoxProps = {
  number: number;
  text: string;
};

const Box: FunctionComponent<BoxProps> = ({ number, text }) => (
  <BoxWrapper>
    <BoxNumber>{number}</BoxNumber>
    <BoxText>{text}</BoxText>
  </BoxWrapper>
);

export default Box;
