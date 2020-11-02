import styled from "styled-components";
import { mediaQueries } from "../../pages/PropertyView/styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 30px;
  padding-left: 40px;
`;

export const Title = styled.div`
  font-family: Roboto;
  line-height: 28px;
  color: #4a4a4a;
  padding-left: 15px;
  font-size: 25px;
  font-weight: bold;
`;

export const StatisticsWrapper = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;

  ${mediaQueries.tabletPortrait`
    display: none;
`};
`;

export const BoxWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BoxNumber = styled.div`
  font-size: 20px;
  font-family: Roboto;
  font-weight: bold;
  line-height: 28px;
  color: #4a4a4a;
`;

export const BoxText = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #4a4a4a;
`;

export const SeparationBar = styled.div`
  width: 40px;
  height: 0px;
  border: 1px solid #e6e6e6;
  transform: rotate(90deg);
  margin-top: 20px;
`;
