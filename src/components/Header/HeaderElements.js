import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";

export const Container = styled.div`
  display: flex;
  position: fixed;

  width: 100%;

  @media only screen and (min-width: 550px) {
    margin-left: 25vw;
    width: 75vw;
  }

  @media only screen and (min-width: 1050px) {
    margin-left: 300px;
    width: calc(100vw - 300px);
  }
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background: #fff;
`;

export const LogoDesign = styled.div`
  height: 62px;
  padding: 0.6rem;
  background: #333269;
  width: 80px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media only screen and (min-width: 550px) {
    display: none;
    width: 0;
  }
`;

export const Section = styled.div`
  flex: 1;
  display: flex;
`;

export const SectionContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  border: 1px solid #f0eff5;
  padding: 0.6rem;

  @media only screen and (min-width: 470px) {
    padding: 0.2rem 0.6rem;
  }
`;

export const SearchBar = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const Input = styled.input`
  border: none;
  background: #f8f8fc;
  padding: 1rem;
  font-size: 1.2rem;
  display: none;
  flex: 1;

  &:placeholder {
    color: #8695a0;
    font-size: 1.2rem;
    color: green;
  }

  @media only screen and (min-width: 470px) {
    display: block;
  }
`;

export const SearchIconItem = styled(SearchIcon)`
  font-size: 30px !important;
`;

export const Links = styled.div`
  display: flex;
`;

export const MessageIconItem = styled(MessageIcon)`
  background: #5855d6;
  font-size: 40px !important;
  padding: 0.5rem;
  border-radius: 50%;
  color: white !important;
  margin-right: 5px;
`;

export const ProfileIcon = styled(PersonIcon)`
  background: #5855d6;
  font-size: 40px !important;
  padding: 0.5rem;
  border-radius: 50%;
  color: white !important;
`;
