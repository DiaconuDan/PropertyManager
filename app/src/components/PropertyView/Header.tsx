
import React  from "react";
import styled from 'styled-components';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 30px;
  padding-left: 20px;
`;

const Title = styled.div`
  font-family: Roboto;
  line-height: 28px;
  color: #4a4a4a;
  padding-left: 15px;
  font-size: 25px;
  font-weight: bold;
`;

const StatisticsWrapper = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
`;

const Box = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  font-size: 25px;
  font-family: Roboto;
  font-weight:bold;
  line-height: 28px;
  color: #4a4a4a;
`;

const Header = () => (
    <Wrapper>
    <ArrowBackIcon fontSize={"large"} />
    <Title> Applicants </Title>
    <StatisticsWrapper>
      <Box> 25</Box>
      <Box> 6</Box>
      <Box> 16</Box>
      <Box> 10</Box>
    </StatisticsWrapper>
  </Wrapper>
);

export default Header ;