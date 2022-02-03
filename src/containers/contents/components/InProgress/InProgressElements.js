import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  background: #fff;
  padding: 1rem;
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 375px) {
    flex-direction: row;
    height: 100px;

    min-width: 320px;
  }

  @media only screen and (min-width: 550px) {
    flex-direction: column;
    padding: 2rem;
    align-items: center;
    height: 70%;
    min-height: 340px;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  display: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 15px;
    max-width: 400px;
  }
  ::after {
    content: "";
    background: rgba(88, 85, 214, 0.4);
    position: absolute;
    border-radius: 15px;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
  @media only screen and (min-width: 375px) {
    display: block;
  }

  @media only screen and (min-width: 550px) {
    height: 200px;
  }
`;

export const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0.2rem 1rem;

  @media only screen and (min-width: 550px) {
    padding: 1rem;
  }
`;
export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 375px) {
    flex-direction: row;
  }
`;
export const TextArea = styled.div`
  margin-bottom: 1rem;
`;
export const Title = styled.h3`
  font-weight: 600;
  font-size: 1.1rem;

  @media only screen and (min-width: 375px) {
    min-width: 150px;
  }
`;
export const Subscript = styled.div`
  text-transform: uppercase;
  color: #9592a6;
  font-size: 0.7rem;
  letter-spacing: 0.04rem;
`;
export const Date = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 1rem;

  @media only screen and (min-width: 375px) {
    align-items: center;
    padding-bottom: 0;
  }
`;
export const Day = styled.h3`
  color: #9592a6;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
`;
export const Month = styled.p`
  color: #9592a6;
  text-transform: uppercase;
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
`;
export const Notification = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const InProgressLink = styled.p`
  font-style: italic;
  color: #eb466d;
`;
export const Join = styled.p`
  font-size: 0.9rem;
  color: #6e6bdb;
  font-weight: 600;
`;
