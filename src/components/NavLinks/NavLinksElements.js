import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0.5rem 0;
  width: 90vw;
  overflow-x: scroll;

  @media only screen and (min-width: 550px) {
    flex-direction: column;
    padding-top: 2.5rem;
    width: 25vw;
    overflow-x: hidden;
  }
  @media only screen and (min-width: 1050px) {
    width: 300px;
  }
`;

export const Link = styled.div`
  padding: 0.5rem 0.9rem;
  padding-left: 8vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: white;
    color: #333269;
  }

  @media only screen and (min-width: 550px) {
    flex-direction: row;
  }
`;
export const Icon = styled.div`
  margin-right: 0.2rem;
  height: 25px;
`;
export const LinkText = styled.p``;
