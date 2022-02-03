import React from "react";
import {
  Container,
  Wrapper,
  ArrowBack,
  Link,
  Icon,
  LinkText,
} from "./NavbarElements";
import { Logo, Links } from "../.././components";

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Icon>
          <ArrowBack />
        </Icon>

        <Logo />
        <Links />
      </Wrapper>
    </Container>
  );
}

export default Navbar;
