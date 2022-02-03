import styled from "styled-components";

export const Container = styled.div`
  display: none;

  @media only screen and (min-width: 550px) {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
  }
`;
export const Design = styled.div`
  height: 40px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const Text = styled.p`
  font-family: var(--font-logo);
  color: #deddff;
  font-size: 1.3rem;
  font-weight: 800;
  padding-top: 0.5rem;
  padding-left: 0.3rem;
`;
