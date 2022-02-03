import React from "react";
import {
  Container,
  LogoDesign,
  SearchBar,
  Input,
  SearchIconItem,
  Links,
  MessageIconItem,
  Wrapper,
  Section,
  SectionContainer,
  ProfileIcon,
} from "./HeaderElements";
import { LogoImage } from "../../images";

function Header() {
  return (
    <Container>
      <Wrapper>
        <LogoDesign>
          <img src={LogoImage} alt="University" />
        </LogoDesign>
        <Section>
          <SectionContainer>
            <SearchBar>
              <SearchIconItem />
              <Input placeholder="Search" type="text" />
            </SearchBar>
            <Links>
              <MessageIconItem />
              <ProfileIcon />
            </Links>
          </SectionContainer>
        </Section>
      </Wrapper>
    </Container>
  );
}

export default Header;
