class WeatherView {
  static render() {
    const html = `
     <div id="message"></div>
     
     <label for="location">Enter City Name</label>
     <input type="text" id="location">
     
     <label>Metric</label>
     <label class="toggle"><input id="unit-toggle" type="checkbox"><span class="slider round"></span></label>
     <label>Imperial</label>
     
     <button class="btn btn-success" id="Send">How's the weather?</button></br>
     
     <div class="results col-sm-8 m-auto" >
       <label for="" id="result" style="margin: auto "></label>
       <label for="" id="unit"></label></br>
       </div>
       <div class="w-100 align-content-center">
       <img class = "m-5" src="" alt="" id="img"></br>
       </div>
     </div>
      `;
    document.getElementsByTagName('main-app')[0].innerHTML = html;
  }
}

export default WeatherView;
