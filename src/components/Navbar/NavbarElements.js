import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  background: #fff;

  @media only screen and (min-width: 550px) {
    background-color: #333269;
    color: #c0beff;
    height: 100vh;
    width: 25vw;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
  }

  @media only screen and (min-width: 1050px) {
    width: 300px;
  }
`;

export const Wrapper = styled.div`
  @media only screen and (min-width: 550px) {
    min-width: 180px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Icon = styled.div`
  display: none;

  @media only screen and (min-width: 550px) {
    align-self: flex-end;
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem;
    margin-right: 0.3rem;
  }
`;
export const ArrowBack = styled(ArrowBackIosIcon)``;
