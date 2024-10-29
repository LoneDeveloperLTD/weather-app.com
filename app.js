
const apiKey = 'c74b41c4c65be49ff4f040bfd17a7e2f';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


const searchBtn = document.querySelector('.search button')
const searchInput = document.querySelector('.search input')
const weatherIcon = document.querySelector('.weather-icon')
const weatherInfo =  document.querySelector('.weather')
const errorMsg = document.querySelector('.error')


    async function checkWeather(city) {

        const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);
  
         
        

  if(response.status == 404){
    errorMsg.style.display = 'block';
     weatherInfo.style.display = 'none'
    
  }
  
        const data = await response.json() 
        if(!data){
           
        }        
        console.log(data)
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&deg;c' ;
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed +  'km/h';
        
      if(data.weather[0].main == 'Clouds'){
          weatherIcon.src = 'images/clouds.png'
      }else if(data.weather[0].main == 'Drizze'){
          weatherIcon.src = 'images/drizzle.png'
      }else if(data.weather[0].main == 'Clear'){
          weatherIcon.src = 'images/clear.png'
      }else if(data.weather[0].main == 'Mist'){
          weatherIcon.src = 'images/mist.png'
      }else if(weatherIcon.src = 'images/rain.png'){
      }
  
      weatherInfo.style.display = 'block'
      errorMsg.style.display = 'none';
  }

  searchBtn.addEventListener('click', function(){ 
  checkWeather(searchInput.value);

})
