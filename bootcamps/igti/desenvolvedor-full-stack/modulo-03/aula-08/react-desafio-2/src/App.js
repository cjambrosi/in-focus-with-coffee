
import React, { Component } from 'react';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
      filteredCountries: [],
      filteredPopulation: 0,
      filter: '' // Variáveis que irão trabalhar para controlar o estado por inputs nunca utilizar null ou undefined
    }
  }

  async componentDidMount() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await res.json();

    const allCountries = json.map(({ name, numericCode, flag, population }) => {
      return {
        id: numericCode,
        name,
        filterName: name.toLowerCase(),
        flag,
        population
      }
    });

    const filteredPopulation = this.calculateTotalPopulationFrom(allCountries);

    this.setState({
      allCountries,
      filteredCountries: Object.assign([], allCountries), // É preciso fazer uma cópia do objeto, pois objeto aponta para o mesmo local de memória, sendo assim não será alterado
      filteredPopulation
    });
  }

  calculateTotalPopulationFrom = countries => {
    const totalPopulation = countries.reduce((accumulator, current) => {
      return accumulator + current.population;
    }, 0);

    return totalPopulation;
  }

  handleChangeFilter = newText => {
    this.setState({
      filter: newText
    });

    const filterLowerCase = newText.toLowerCase();
    const filteredCountries = this.state.allCountries.filter(country => {
      return country.filterName.includes(filterLowerCase); // Retorna TRUE e é o que o filter espera
    });

    const filteredPopulation = this.calculateTotalPopulationFrom(filteredCountries);

    this.setState({
      filteredCountries,
      filteredPopulation
    });
  }

  render() {
    const { filteredCountries, filteredPopulation, filter } = this.state;
    
    return (
      <div className="container">
        <h1 style={styles.centeredTitle}>React Countries</h1>

        <Header filter={filter} countryCount={filteredCountries.length} totalPopulation={filteredPopulation} onChangeFilter={this.handleChangeFilter} />

        <Countries countries={filteredCountries} />
      </div>
    );
  }
}

const styles = {
  centeredTitle: {
    textAlign: 'center'
  }
}