import React from "react";
import { Button, Icon, Label, Table } from "semantic-ui-react";

const DevicesTable = () => {
  return (
    <div>
      {" "}
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Devices</Table.HeaderCell>
            <Table.HeaderCell>Policy Action</Table.HeaderCell>
            <Table.HeaderCell>Security Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell negative>
              Device 1 <Icon name="assistive listening devices" />
            </Table.Cell>
            <Table.Cell>
              <Button.Group>
                <Button content="Edit" />
                <Button.Or />
                <Button
                  content="Delete"
                  label={{ content: "Policy" }}
                  labelPosition="right"
                />
              </Button.Group>
            </Table.Cell>
            <Table.Cell negative>1 Security Threat</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell positive>
              Device 2 <Icon name="assistive listening devices" />
            </Table.Cell>
            <Table.Cell>
              <Button.Group>
                <Button content="Edit" />
                <Button.Or />
                <Button
                  content="Delete"
                  label={{ content: "Policy" }}
                  labelPosition="right"
                />
              </Button.Group>
            </Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell positive>
              Device 3 <Icon name="assistive listening devices" />
            </Table.Cell>
            <Table.Cell>
              <Button.Group>
                <Button content="Edit" />
                <Button.Or />
                <Button
                  content="Delete"
                  label={{ content: "Policy" }}
                  labelPosition="right"
                />
              </Button.Group>
            </Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell positive>
              Device 4 <Icon name="assistive listening devices" />
            </Table.Cell>
            <Table.Cell>
              <Button.Group>
                <Button content="Edit" />
                <Button.Or />
                <Button
                  content="Delete"
                  label={{ content: "Policy" }}
                  labelPosition="right"
                />
              </Button.Group>
            </Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default DevicesTable;
