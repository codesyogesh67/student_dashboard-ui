import React from "react";
import { InProgressImage } from "../../../../images";

import {
  Container,
  Wrapper,
  Section,
  ImageContainer,
  MainBody,
  TextArea,
  Title,
  Subscript,
  Date,
  Day,
  Month,
  Notification,
  InProgressLink,
  Join,
} from "./InProgressElements";

function InProgress() {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <img src={InProgressImage} alt="In Progress" />
        </ImageContainer>
        <Section>
          <MainBody>
            <TextArea>
              <Title>Lab Work- Week 3</Title>
              <Subscript>Science 303</Subscript>
            </TextArea>
            <Date>
              <Day>08</Day>
              <Month>April</Month>
            </Date>
          </MainBody>
          <Notification>
            <InProgressLink>In Progress</InProgressLink>
            <Join>Join Now</Join>
          </Notification>
        </Section>
      </Wrapper>
    </Container>
  );
}

export default InProgress;
