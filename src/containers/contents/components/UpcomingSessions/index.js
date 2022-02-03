import React from "react";
import {
  Container,
  Header,
  Title,
  Icon,
  Wrapper,
  Section,
  HeadingData,
  Heading,
  Row,
  RowData,
  FirstRowData,
  SecondRowData,
  Day,
  Date,
  Month,
  Text,
  Subscript,
  Time,
} from "./UpcomingSessionsElements";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function UpcomingSessions() {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>Upcoming Sessions</Title>
          <Icon>
            <MoreHorizIcon />
          </Icon>
        </Header>
        <Section>
          <Heading>
            <HeadingData>Date</HeadingData>
            <HeadingData>Class</HeadingData>
            <HeadingData>Time</HeadingData>
          </Heading>
          <Row>
            <FirstRowData>
              <Day>Tomorrow</Day>
              <Date>09</Date>
              <Month>April </Month>
            </FirstRowData>
            <SecondRowData>
              <Text>Database and Information System</Text>
              <Subscript>Information Technology</Subscript>
            </SecondRowData>
            <RowData>
              <Time>8:30am-1:00pm</Time>
            </RowData>
          </Row>

          <Row>
            <FirstRowData>
              <Day>Wed</Day>
              <Date>10</Date>
              <Month>April </Month>
            </FirstRowData>
            <SecondRowData>
              <Text>AI and Machine Learning</Text>
              <Subscript>Computer Science</Subscript>
            </SecondRowData>
            <RowData>
              <Time>9:30am-12:00pm</Time>
            </RowData>
          </Row>
          <Row>
            <FirstRowData>
              <Day>Thu</Day>
              <Date>11</Date>
              <Month>April </Month>
            </FirstRowData>
            <SecondRowData>
              <Text>Definition and Idetion</Text>
              <Subscript>UX/UI design</Subscript>
            </SecondRowData>
            <RowData>
              <Time>3:30am-7:00pm</Time>
            </RowData>
          </Row>
        </Section>
      </Wrapper>
    </Container>
  );
}

export default UpcomingSessions;
