import WeatherView from '../views/weather.view';

class WeatherController {
  constructor() {
    this.weatherID = '1316827060b8f7f20dcad45f0a14d553';
    this.giphyID = 'ewZH7xWXlpDHw08WN9t4DLdihDsov28K';
    WeatherView.render();
    this.render();
  }

  getImg(topic) {
    const img = document.getElementById('img');
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${this.giphyID}&s=${topic}`, { mode: 'cors' })
      .then((response) => response.json())
      .then((response) => {
        img.src = response.data.images.original.url;
      })
      .catch(() => {
      });
  }

  getWeather() {
    const location = document.getElementById('location').value;
    const units = this.getUnits();
    this.sendMessage('Loading...');
    fetch(`https://api.openweathermap.org/data/2.5/weather?apiKey=${this.weatherID}&q=${location}&units=${units}`, { mode: 'cors' })
      .then((response) => response.json())
      .then((response) => {
        const object = response;
        document.getElementById('result').innerHTML = `<h1>${object.main.temp} </h1>`;
        if ((object.main.temp < 20 && units === 'metric') || (object.main.temp < 68 && units === 'imperial')) {
          this.getImg('cold weather');
        } else {
          this.getImg('hot Weather');
        }
        this.sendMessage('');
      })
      .catch(() => {
        this.sendMessage('City not found. Try again!');
      });
  }

  getUnits() {
    let units = 'metric';
    const toggle = document.getElementById('unit-toggle').checked;
    if (toggle === true) {
      units = 'imperial';
    } else {
      units = 'metric';
    }

    if (units === 'metric') {
      document.getElementById('unit').innerHTML = '<h1> °Celsius </h1>';
    } else {
      document.getElementById('unit').innerHTML = '<h1> °Fahrenheit </h1>';
    }

    return (units);
  }

  clearForm() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('unit').innerHTML = '';
    document.getElementById('message').innerHTML = '';
  }

  render() {
    document.getElementById('Send').addEventListener('click', event => {
      this.clearForm();
      this.getWeather();
    });

    document.getElementById('unit-toggle').addEventListener('click', ev => {
      if (document.getElementById('location').value !== '') {
        this.getWeather();
      }
    });
  }

  sendMessage(msg) {
    document.getElementById('message').innerHTML = `<p>${msg}</p>`;
  }
}

export default WeatherController;
