import DashboardView from '../views/dashboard.view';
import WeatherController from './weather.controller';

class DashboardController {
  constructor() {
    DashboardView.render();
    this.weatherController = new WeatherController();
  }
}

export default DashboardController;
