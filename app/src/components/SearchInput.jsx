import React from 'react';
import { Input } from 'semantic-ui-react';
import styled from 'styled-components';



const SearchInput = ({ value, onChange }) => (
    <Input icon='search'  size='large' iconPosition='left' placeholder='Search for applicant' value={value} onChange={onChange} />
 
)

export default SearchInput;