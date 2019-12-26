class WeatherView {
  static render() {
    const html = `

     <div id="message"></div>
     <label for="location">Enter City Name</label>
     <input type="text" id="location">
     
     <select name="" id="units">
        <option value="metric">metric</option>
        <option value="imperial">imperial</option>
     </select>
     
     <button class="btn btn-success" id="Send">How's the weather?</button></br>
     
     <div class="results col-sm-8 m-auto" >
       <label for="" id="result" style="margin: auto "></label>
       <label for="" id="unit"></label></br>
       </div>
       <img src="" alt="" id="img"></br>
     </div>
      `;
    document.getElementsByTagName('main-app')[0].innerHTML = html;
  }
}

export default WeatherView;
