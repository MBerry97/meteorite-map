import React from 'react';
import './App.css';
import Header from './components/Header';
import DataGatherer from './components/DataGatherer';
import HeatMap from './components/HeatMap';

class App extends React.Component {
  state = {
    meteorites: [],
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
        this.setState({ meteorites });
      });
  }

  addData = (startingYear, endingYear, mass) => {
    this.setState((previousState) => {
      return {
        ...previousState.meteorites,
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
      <div>
        <Header />
        <DataGatherer addData={this.addData} />
        <HeatMap meteoriteInfo={this.state} />
      </div>
    );
  }
}

export default App;
