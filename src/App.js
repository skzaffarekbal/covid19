import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css'
import { fetchData } from './api';

import covidImg from './image/covid.png';


class App extends React.Component {

  state = {
    data: {},
    country: ""
  }

  async componentDidMount (){
    const fetchedData = await fetchData()
    this.setState({data: fetchedData})
  }

  selectedCountry = async (country) => {

    console.log(country);
    // Fetch Data
    const fetchedData = await fetchData(country)
    console.log(fetchedData);
    // Set the state
    this.setState({data: fetchedData, country: country})
  }

  render(){
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={covidImg} alt="COVID" />
        <Cards data={data}/>
        <CountryPicker selectedCountry={this.selectedCountry}/>
        <Chart data={data} country={country}/>
      </div>
    );
  }

}

export default App;
