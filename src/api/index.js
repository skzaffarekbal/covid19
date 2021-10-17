import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {

    let changeUrl = url;
    if(country){
        changeUrl = `${url}/countries/${country}`;
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeUrl)
        const modifyData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return modifyData;
    } catch (error) {
        console.log("Error : ",error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        const modifyData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        // console.log(modifyData);
        return modifyData;
    } catch (error) {
        console.log("Error : ",error);
    }
}

export const fetchCountry = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return countries.map(country => country.name)

    } catch (error) {
        console.log("Error : ",error);
    }
}