import styled from "styled-components";

export const Container = styled.div`
  background: #f0eff5;
  padding: 0.8rem;
  overflow-y: scroll;
  margin-top: 9vh;
  height: 80vh;

  @media only screen and (min-width: 375px) {
    padding: 2rem;
  }

  @media only screen and (min-width: 550px) {
    margin-left: 25vw;
    width: 75vw;
    height: 91vh;
  }

  @media only screen and (min-width: 1050px) {
    margin-left: 300px;
    width: calc(100vw - 300px);
  }
`;

export const Title = styled.h1`
  font-size: 1.3rem;
`;

export const Wrapper = styled.div`
  @media only screen and (min-width: 550px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    row-gap: 20px;
    column-gap: 20px;
  }

  @media only screen and (min-width: 1050px) {
    grid-template-columns: 1fr 1fr;
  }
`;
