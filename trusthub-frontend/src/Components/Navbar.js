import { Icon, Input, Menu } from "semantic-ui-react";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Menu>
        <Menu.Item>
          <Input className="icon" icon="search" placeholder="Search..." />
        </Menu.Item>

        <Menu.Item>
          <Icon name="bell" />
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
