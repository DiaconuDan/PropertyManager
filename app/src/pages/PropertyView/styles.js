import styled, {css} from "styled-components";

export const Body = styled.div`
  padding-top: 30px;
  padding-left: 40px;
  padding-bottom: 30px;
`;

export const screenSizes = {
  largeDesktop: 1680,
  desktop: 1350,
  tabletLandscape: 1023,
  tabletPortrait: 720,
  phone: 360
};

export const mediaQueries = Object.keys(screenSizes).reduce(
  (devices, label) => ({
    ...devices,
    [label]: (...args) => css`
      @media (max-width: ${screenSizes[label] / 16}em) {
        ${css(...args)};
      }
    `
  }),
  {}
);