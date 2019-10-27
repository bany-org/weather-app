import * as ELEMENTS from './elements.js';
import { Http } from './http.js'

const APP_ID = '1189a029ce3a35c1fbf29e84a2e443fc';

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather() {
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
    if (CITY_NAME.length === 0) {
        alert('Please enter a city name');
    }

    const URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + CITY_NAME + '&units=metric&appid=' + APP_ID;
    Http.fetechData(URL)
        .then(function(responseData) {
            console.log(responseData);
        })
        .catch(function(error) {
            alert(error);
        })
}