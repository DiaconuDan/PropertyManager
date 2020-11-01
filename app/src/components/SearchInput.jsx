import React from 'react';
import { Input } from 'semantic-ui-react';
import styled from 'styled-components';

const Wrapper = styled.div`
   padding-top: 80px;
   padding-left: 20px;
`;

const SearchInput = ({ value, onChange }) => (
  <Wrapper>
    <Input icon='search'  size='large' iconPosition='left' placeholder='Search for applicant' value={value} onChange={onChange} />
  </Wrapper>
)

export default SearchInput;