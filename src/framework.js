import DashboardController from './controllers/dashboard.controller';

class Framework {
  static activateRoute(routeName) {
    const handlers = {
      index: { controller: DashboardController },
    };

    const route = handlers[routeName];
    const Controller = handlers[routeName].controller;
    return new Controller();
  }
}

export default Framework;
