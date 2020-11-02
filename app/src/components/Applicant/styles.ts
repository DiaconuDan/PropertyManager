import styled from "styled-components";

// Card

export const CardWrapper = styled.div`
  padding-left: 20px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 241px;
  width: 305px;
  background: ##ffffff;
  border: 1px solid #efefef;
  box-sizing: border-box;
  border-radius: 4px;
  margin-right: 20px;
  margin-top: 25px;
`;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const RowStatus = styled.div`
  color: #4a4a4a;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 20px;
`;

// Row

export const FullName = styled.div`
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 16px;
`;

export const PhoneNumber = styled.div`
  padding-bottom: 10px;
  font-size: 16px;
`;

export const DateWrapper = styled.div`
  padding-bottom: 10px;
`;

export const Date = styled.div`
  background: #9d9d9d;
  border-radius: 3px;
  width: 100%;
  height: 19x;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: bold;
  font-size: 12px;
  line-weight: 10px;
  font-family: Roboto, sans-serif;
  padding-left: 7px;
  padding-right: 7px;
`;

export const Bid = styled.div`
  background: #feb902;
  border-radius: 3px;
  width: 85px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
`;

export const Email = styled.div`
  padding-bottom: 10px;
  font-size: 16px;
`;
