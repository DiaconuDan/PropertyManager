import React from "react";
import { NotificationContainer } from "react-notifications";
import {ErrorWrapper, ErrorMessage} from './styles' ;


const Error = () => (
  <ErrorWrapper>
    <NotificationContainer />
    <ErrorMessage> API has failed! Try again </ErrorMessage>
  </ErrorWrapper>
);

export default Error;
