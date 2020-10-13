import React from 'react';
import './App.css';
import Header from './components/Header';
import DataGatherer from './components/DataGatherer';
import HeatMap from './components/HeatMap';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class App extends React.Component {
  state = {
    meteorites: [],
    isLoading: true,
    userInputs: {
      startingYear: '',
      endingYear: '',
      mass: '',
    },
  };

  componentDidMount() {
    fetch(
      'https://data.nasa.gov/resource/gh4g-9sfh.json?$where=mass%20%3E%20100000'
    )
      .then((res) => {
        return res.json();
      })
      .then((meteorites) => {
        this.setState({
          meteorites,
          isLoading: false,
          userInputs: {
            startingYear: '',
            endingYear: '',
            mass: '',
          },
        });
      });
  }

  addData = (startingYear, endingYear, mass) => {
    this.setState((previousState) => {
      return {
        ...previousState.meteorites,
        isLoading: previousState.isLoading,
        userInputs: {
          startingYear,
          endingYear,
          mass,
        },
      };
    });
  };

  render() {
    return (
      <Container>
        <Header />
        <DataGatherer addData={this.addData} />
        {this.state.isLoading ? (
          <p>Page is currently loading</p>
        ) : (
          <HeatMap meteoriteInfo={this.state} />
        )}
      </Container>
    );
  }
}

export default App;
