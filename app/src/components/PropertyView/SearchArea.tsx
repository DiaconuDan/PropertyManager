import React, { FunctionComponent } from "react";
import styled from "styled-components";
import SearchInput from "../SearchInput/SearchInput";
import StatusButton from "../Buttons/StatusButton";
import BidButton from "../Buttons/BidButton";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 50px;
  padding-left: 20px;
`;

type SearchAreaProps = {
  value: string;
  onChange: (value:any) => void;
};

const SearchArea: FunctionComponent<SearchAreaProps> = ({
  value,
  onChange,
}) => (
  <SearchContainer>
    <SearchInput value={value} onChange={(e) => onChange(e.target.value)} />
    <BidButton />
    <StatusButton />
  </SearchContainer>
);

export default SearchArea ;
