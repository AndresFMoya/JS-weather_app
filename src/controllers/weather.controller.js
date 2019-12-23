import WeatherModel from "../models/weather.model";
import WeatherView from "../views/weather.view";

class WeatherController {
  constructor() {
    this.weatherID = '1316827060b8f7f20dcad45f0a14d553';
    this.giphyID = 'ewZH7xWXlpDHw08WN9t4DLdihDsov28K';
    WeatherView.render()
    this.getCats()
  };
  
  getCats() {
    const img = document.getElementById('img');
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${this.giphyID}&s=cats`, {mode: 'cors'})
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        img.src = response.data.images.original.url;
      })
      .catch(function () {
        console.log("Promise Rejected");
      });
  }
}

export default WeatherController
