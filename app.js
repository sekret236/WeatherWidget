
  fetch("https://api.openweathermap.org/data/2.5/weather?q=KATOVICE&units=metric&APPID=5d066958a60d315387d9492393935c19") 
  .then((res) => res.json())
  .then((data) => {
      const name = data.name;
      const temp = data.main.temp;
      const pressure = data.main.pressure;
      const description = data.weather[0]['description'];
      const humidity = data.main.humidity;
      const speed = data.wind.speed;
      const deg = data.wind.deg;
      const icon = 'http://openweathermap.org/img/w/04d.png';
      const imgIcon = document.querySelector('.icon');
      const img = document.createElement('img');
      img.setAttribute("src", icon);
      imgIcon.appendChild(img);
         
     
  
    let dataName = document.querySelector('h1');  
    let dataTemp = document.querySelector(".temp");
    let dataPressure = document.querySelector(".pressure");
    let dataDescription = document.querySelector(".description");
    let dataHumidity = document.querySelector(".humidity");
    let dataSpeed = document.querySelector(".speed");
    let dataDeg = document.querySelector(".deg");

    dataName.innerHTML = "weather in "+ name;
    dataTemp.innerHTML = "t: "+ temp + " C";
    dataPressure.innerHTML = "Pressure: "+ pressure + " hPa";
    dataDescription.innerHTML = "Description: "+ description;
    dataHumidity.innerHTML = "Humidity: "+ humidity + " %";
    dataSpeed.innerHTML = "Wind: "+ speed + " km/h SSE";
    dataDeg.innerHTML = "Wind direction: "+ deg + " C";
  
});

 