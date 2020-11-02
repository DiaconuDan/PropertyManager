import React, { FunctionComponent } from "react";
import SearchInput from "./SearchInput";
import StatusButton from "../Buttons/StatusButton";
import BidButton from "../Buttons/BidButton";
import {SearchContainer} from './styles' ;

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
