import { FormControl, NativeSelect } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { fetchCountry } from '../../api';

import styles from './CountryPicker.module.css'

const CountryPicker = ({ selectedCountry }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const allCountries = async () => {
            setFetchedCountries(await fetchCountry())
        }
        allCountries()
    }, [])

    // console.log("fetchedCountries : ", fetchedCountries);

    return (
        <FormControl className={styles.fromControl}>
            <NativeSelect defaultValue="" onChange = {(event) => {selectedCountry(event.target.value)}}>
                <option value="">Global</option>
                {fetchedCountries && fetchedCountries.map((country, i) => (<option key={i} value={country}>{country}</option>
                ))}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
