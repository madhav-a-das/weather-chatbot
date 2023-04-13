const cities = [
  {id: 'Chennai', q: 'Chennai'},
  {id: 'Mumbai', q: 'Mumbai'},
  {id: 'Goa', q: 'Goa'},
  {id: 'Visakhapatnam', q: 'Visakhapatnam'},
  {id: 'Pondicherry', q: 'Pondicherry'},
  {id: 'Mangalore', q: 'Mangalore'}
];


cities.forEach((city) => {
  const button = document.getElementById(city.id);
  
  button.addEventListener('click', () => {

    var newele1 = document.createElement('p');
          newele1.innerHTML = button.innerHTML;
          newele1.style.textAlign = 'right';
          newele1.setAttribute('class', 'user-val')
          info.appendChild(newele1);
          document.getElementById('ques').style.display = "none";
          
    fetch(`https://api.weatherapi.com/v1/current.json?key=4b766322f77b4c93902160148231204&q=${city.q}`)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          var info = document.getElementById('info');
          var newele = document.createElement('p');
          newele.innerHTML = "Last Updated : " + data.current.last_updated + "<br>" + "Temprature in celcius : " + data.current.temp_c + "<br>" + "Pressure in inches : " + data.current.pressure_in + "<br> Humidity : " + data.current.humidity + " <br> Visibility in KM : " + data.current.vis_km + "<br><br>";
          newele.setAttribute('class', 'tempp');
          info.appendChild(newele);
          var newques = document.createElement('p');
          newques.innerHTML = "<h3 class='rep-val'>Which Place weather do you want next? </h3>";
          newques.setAttribute('class', 'box arrow-left');
         
          ques.innerHTML = newques.innerHTML;
          document.getElementById('ques').style.display = "block";
        }, 800);
      })
      .catch(() => console.log('Error occurred while fetching weather data.'));
  });
});
