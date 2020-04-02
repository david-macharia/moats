import React, { Fragment } from 'react';

import { Button, Icon, Grid, Menu, Table } from 'semantic-ui-react'
import SearchStandard from './Search';

const MaterialTableDemo = () => (
  <Fragment>
   <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan='18'>
          <Button
            floated='right'
            icon
            labelPosition='left'
            primary
            size='small'
          >
            <Icon name='user' /> Add User
          </Button>
          <Button size='small'>Approve</Button>
          <Button disabled size='small'>
            Approve All
          </Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>

      <SearchStandard />

      <Button
        floated="right"
        icon
        labelPosition='left'
        primary
        size='small'
      >
        <Icon name='user' /> Add User
          </Button>



    <Table celled striped>
      <Table.Header>


        <Table.Row>
          <Table.HeaderCell >First name</Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>E-mail</Table.HeaderCell>
          <Table.HeaderCell>Phone</Table.HeaderCell>
          <Table.HeaderCell>Assets</Table.HeaderCell>

        </Table.Row>


      </Table.Header>

      <Table.Body>
        <Table.Row>

          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell  >
            10 hours ago
        </Table.Cell>

          <Table.Cell collapsing>
            <Icon name='folder' /> build
        </Table.Cell>
          <Table.Cell>
            <Icon name='folder' /> build
        </Table.Cell>
          <Table.Cell>
            <Icon name='folder' /> build
        </Table.Cell>
        </Table.Row>


        <Table.Row>

          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell >10 hours ago</Table.Cell>
          <Table.Cell>
            <Icon name='folder' /> test
        </Table.Cell>
          <Table.Cell>
            <Icon name='folder' /> build
        </Table.Cell>
          <Table.Cell>
            <Icon name='folder' /> build
        </Table.Cell>

        </Table.Row>
        <Table.Row>

          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell >10 hours ago</Table.Cell>
          <Table.Cell>
            <Icon name='folder' /> build
        </Table.Cell>
          <Table.Cell>
            <Icon name='folder' /> build
        </Table.Cell>
          <Table.Cell>
            <Icon name='folder' /> build
        </Table.Cell>
        </Table.Row>
        <Table.Row>

          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell >10 hours ago</Table.Cell>
          <Table.Cell>
            <Icon name='folder' /> build
        </Table.Cell>
          <Table.Cell>
            <Icon name='folder' /> build
        </Table.Cell>
          <Table.Cell>
            <Icon name='folder' /> build
        </Table.Cell>
        </Table.Row>
        <Table.Row>

          <Table.Cell>Initial commit</Table.Cell>
          <Table.Cell >10 hours ago</Table.Cell>
          <Table.Cell>
            <Icon name='folder' /> build
        </Table.Cell>
          <Table.Cell>
            <Icon name='folder' /> build
        </Table.Cell>
          <Table.Cell>
            <Icon name='folder' /> build
        </Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='5'>
            <Menu floated='right' pagination>
              <Menu.Item as='a' icon>
                <Icon name='chevron left' />
              </Menu.Item>
              <Menu.Item as='a'>1</Menu.Item>
              <Menu.Item as='a'>2</Menu.Item>
              <Menu.Item as='a'>3</Menu.Item>
              <Menu.Item as='a'>4</Menu.Item>
              <Menu.Item as='a' icon>
                <Icon name='chevron right' />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  </Fragment>
)
export default MaterialTableDemo;
