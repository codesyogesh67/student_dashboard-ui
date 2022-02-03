import React from "react";
import { Container, Link, Icon, LinkText, Wrapper } from "./NavLinksElements";
import GridViewIcon from "@mui/icons-material/GridView";
import BookIcon from "@mui/icons-material/Book";
import DateRangeIcon from "@mui/icons-material/DateRange";
import GradeIcon from "@mui/icons-material/Grade";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";

function NavLinks() {
  return (
    <Container>
      <Link>
        <Icon>
          <GridViewIcon />
        </Icon>
        <LinkText>Dashboard</LinkText>
      </Link>
      <Link>
        <Icon>
          <BookIcon />
        </Icon>
        <LinkText>Courses</LinkText>
      </Link>
      <Link>
        <Icon>
          <DateRangeIcon />
        </Icon>
        <LinkText>Calendar</LinkText>
      </Link>
      <Link>
        <Icon>
          <GradeIcon />
        </Icon>
        <LinkText>Grades</LinkText>
      </Link>
      <Link>
        <Icon>
          <PersonOutlineIcon />
        </Icon>
        <LinkText>Attendance</LinkText>
      </Link>
      <Link>
        <Icon>
          <SettingsIcon />
        </Icon>
        <LinkText>Setting</LinkText>
      </Link>
    </Container>
  );
}

export default NavLinks;
