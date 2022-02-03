import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  margin-top: 1.3rem;
  border-radius: 20px;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 1050px) {
    grid-column: 1/3;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  padding-bottom: 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  padding-right: 1rem;
  padding-top: 0.8rem;
`;
export const Title = styled.h1`
  font-size: 1.2rem;
  padding: 0.5rem;
  font-weight: 500;
`;

export const Lists = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 0.5rem 0;
  padding-top: 0.5rem;
  padding-right: 0.5rem;

  @media only screen and (min-width: 470px) {
    grid-template-columns: repeat(3, 1fr);
    padding-top: 0.5rem;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 550px) {
    max-width: 100px;
  }
`;

export const IconTitle = styled.h4`
  font-size: 1.2rem;
  border: 1px solid #cacccb;
  padding: 0.8rem;
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
`;
export const TextBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  padding: 1rem 0;

  @media only screen and (min-width: 470px) {
    margin-top: 0;
  }
`;
export const TextTitle = styled.h1`
  background: #5855d6;
  color: white;
  padding: 0.2rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  text-align: center;
  font-weight: 500;
`;

export const Text = styled.p`
  padding: 0.3rem;
  font-size: 0.8rem;
  padding-left: 0;
  text-align: center;
`;

export const Progress = styled.div`
  grid-column: 2/3;
  grid-row: 1/3;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: 450px) {
    grid-column: 3/4;
    grid-row: 1/2;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 768px) {
    grid-column: 3/5;
  }
`;

export const ProgressDescription = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Count = styled.h3`
  color: #9592a6;
  font-size: 1.5rem;
`;
export const Subscript = styled.p`
  color: #9592a6;
  font-size: 0.5rem;
  text-align: center;
`;

export const ProgressValue = styled.p`
  border: 8px solid #5855d6;
  border-radius: 50%;
  padding: 1rem 0.8rem;
  color: #9592a6;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: #eeeeee;
`;
