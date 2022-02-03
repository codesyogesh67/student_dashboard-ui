import React from "react";
import { Navbar, Header } from "../.././components";
import Contents from "../contents";
import { Container, Wrapper } from "./HomepageElements";

function Homepage() {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Header />
        <Contents />
      </Wrapper>
    </Container>
  );
}

export default Homepage;
