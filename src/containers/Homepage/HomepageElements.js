import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media only screen and (min-width: 550px) {
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  margin-left: 0;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 550px) {
    flex: 1;
  }
`;
