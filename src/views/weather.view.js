class WeatherView {
  static render() {
    const html = `
     <img src="" alt="" id="img">
      `;
    document.getElementsByTagName('main-app')[0].innerHTML = html;
  };
}

export default WeatherView
