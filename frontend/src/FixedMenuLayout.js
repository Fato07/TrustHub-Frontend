import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  MenuItem,
  Search,
  Segment,
} from "semantic-ui-react";
import DevicesTable from "./DevicesTable";
import Footer from "./Footer";
import devices from "./assets/devicesIcon.jpeg";
import groups from "./assets/groupsIcon.jpeg";

const FixedMenuLayout = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <Image size="mini" src="/logo.png" style={{ marginRight: "1.5em" }} />
          Trust Hub
        </Menu.Item>
        <MenuItem>
          <Search placeholder="Search..." />
        </MenuItem>
        <Menu.Item>
          <Icon name="bell" />
        </Menu.Item>
      </Container>
    </Menu>

    <Container text style={{ marginTop: "7em" }}>
      <Header as="h1">Trust Hub Policy as a service (PAAS)</Header>

      <Image.Group centered size="tiny">
        <Image centered src={devices} style={{ marginLeft: "25%" }} />
        <Image src={groups} style={{ float: "left", marginRight: "25%" }} />
      </Image.Group>

      <Divider horizontal>
        <Header as="h4">
          <Icon name="bar chart" />
          Specifications
        </Header>
      </Divider>

      <DevicesTable />
    </Container>

    <Segment
      inverted
      vertical
      style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
    >
      <Footer />
    </Segment>
  </div>
);

export default FixedMenuLayout;
