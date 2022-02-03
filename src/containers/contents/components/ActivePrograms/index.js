import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Header,
  Lists,
  List,
  Icon,
  IconTitle,
  TextBody,
  Text,
  TextTitle,
  Progress,
  ProgressDescription,
  Section,
  Count,
  Subscript,
  ProgressValue,
  Divider,
} from "./ActiveProgramsElements";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function ActivePrograms() {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>Active Programs</Title>
          <MoreHorizIcon />
        </Header>
        <Lists>
          <List>
            <Icon>
              <IconTitle>Math</IconTitle>
            </Icon>
            <TextBody>
              <TextTitle>Algebra 101</TextTitle>
              <Text>Functions and Graphs</Text>
            </TextBody>
            <Progress>
              <ProgressDescription>
                <Section>
                  <Count>1</Count>
                  <Subscript>Overdue Assignments</Subscript>
                </Section>
                <Section>
                  <Count>5</Count>
                  <Subscript>Remaining Assignments</Subscript>
                </Section>
                <Section>
                  <Count>A-</Count>
                  <Subscript>Academic Average</Subscript>
                </Section>
              </ProgressDescription>
              <ProgressValue>45%</ProgressValue>
            </Progress>
          </List>
          <Divider />
          <List>
            <Icon>
              <IconTitle>Science</IconTitle>
            </Icon>
            <TextBody>
              <TextTitle>Physiology 301</TextTitle>
              <Text>Cell Metabolism</Text>
            </TextBody>
            <Progress>
              <ProgressDescription>
                <Section>
                  <Count>1</Count>
                  <Subscript>Overdue Assignments</Subscript>
                </Section>
                <Section>
                  <Count>5</Count>
                  <Subscript>Remaining Assignments</Subscript>
                </Section>
                <Section>
                  <Count>A-</Count>
                  <Subscript>Academic Average</Subscript>
                </Section>
              </ProgressDescription>
              <ProgressValue>65%</ProgressValue>{" "}
            </Progress>
          </List>
        </Lists>
      </Wrapper>
    </Container>
  );
}

export default ActivePrograms;
