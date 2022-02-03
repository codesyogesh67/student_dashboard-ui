import React from "react";

import { Container, Design, Text } from "./LogoElements";
import { LogoImage } from "../../images";
function Logo() {
  return (
    <Container>
      <Design>
        <img src={LogoImage} alt="University" />
      </Design>
      <Text>Unive</Text>
    </Container>
  );
}

export default Logo;
