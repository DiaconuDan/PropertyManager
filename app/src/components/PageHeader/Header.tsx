import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Wrapper, Title, StatisticsWrapper, SeparationBar } from "./styles";
import Box from "./Box";

const Header = () => (
  <Wrapper>
    <ArrowBackIcon fontSize={"large"} />
    <Title> Applicants </Title>
    <StatisticsWrapper>
      <Box number={9} text="Total" /> {/* the values of the boxes can come by looping through the values on the applicants and sending them as props here */}
      <SeparationBar />
      <Box number={3} text="New" />
      <SeparationBar />
      <Box number={5} text="Viewed" />
      <SeparationBar />
      <Box number={3} text="Appointment" />
      <SeparationBar />
      <Box number={2} text="Others" />
    </StatisticsWrapper>
  </Wrapper>
);

export default Header;
