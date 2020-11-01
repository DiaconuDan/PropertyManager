import React from "react";
import styled from "styled-components";
import { NotificationContainer } from "react-notifications";

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  color: red;
  font-size: 30px;
  margin-top: 200px;
`;


const Error = () => (
  <ErrorWrapper>
    <NotificationContainer />
    <Message> API has failed! Try again </Message>
  </ErrorWrapper>
);

export default Error;
