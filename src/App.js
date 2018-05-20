import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Header, Label } from 'semantic-ui-react';
import { capitalize } from 'lodash';
import { data } from './data/main.json';
import { studies } from './data/studies.json';

const colors = [
  'olive', 'green', 'teal', 'blue', 'black'
]

// keep as example of dynamic columns for notes
const GridExampleColoredColumn = () => (
  <Grid columns={5} padded stackable>
    {colors.map(color => (
      <Grid.Column color={color} key={color}>

      </Grid.Column>
    ))}
  </Grid>
)

class App extends Component {
  render() {
    return (
      <Grid padded stackable>
        <Grid.Column width={4}>
          <Header color={'black'}>{data.name}</Header>
          <p>{data.role}</p>
          <p>{data.company}</p>
        </Grid.Column>
        <Grid.Column width={6}>
          {data.skills.map(item => {
              return <Label horizontal>{item}</Label>
          })}
        </Grid.Column>
        <Grid.Column width={6}></Grid.Column>
        <Grid.Column width={16}></Grid.Column>
        <Grid.Column width={6}></Grid.Column>
        <Grid.Column width={5}></Grid.Column>
        <Grid.Column width={5}></Grid.Column>
      </Grid>
    );
  }
}

export default App;
