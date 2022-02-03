import React from "react";
import { Container, Title, Wrapper } from "./ContentsElements";
import ActivePrograms from "./components/ActivePrograms";
import InProgress from "./components/InProgress";
import UpcomingSessions from "./components/UpcomingSessions";

function Contents() {
  return (
    <Container>
      <Title>Hello, Student !</Title>
      <Wrapper>
        <ActivePrograms />
        <InProgress />
        <UpcomingSessions />
      </Wrapper>
    </Container>
  );
}

export default Contents;
