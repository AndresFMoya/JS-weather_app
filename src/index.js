import Framework from './framework';

const app = () => {
  Framework.activateRoute('index');
  document.getElementById('content').innerHTML = 'App works!';
};

app();