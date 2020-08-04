import React,{useState} from 'react';
import { Input,Button,Icon ,Container,Segment,Menu} from 'semantic-ui-react';
import './App.css';
import Form from './Form';
import Weather from './Weather';
import "semantic-ui-css/semantic.min.css";
import { Header } from 'semantic-ui-react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  const [weather,setWeather] = useState([])
  const APIKEY = 'c2514daffcbd261b8f9940d30fc01d0a'

  async function fetchData(e) {
    const city = e.target.elements.city.value
   
      e.preventDefault()
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`)
      .then( res => res.json())
      .then(data => data)
      if(city ) {
      setWeather({
        data: apiData,
        city: apiData.name,
        icon: apiData.weather[0].icon,
        description: apiData.weather[0].description,
        temperature: Math.round(apiData.main.temp_min -273.15),
        temperaturef: Math.round((Math.round(apiData.main.temp_min -273.15))*1.8+32),
        error:""
      }
      )} else {
        setWeather({
          data: '',
          city: '',
         
          description: '',
          temperature: '',
          error:"Please Type A City And Country"
      }
      )}
    
  }
  var src;
  if(weather.description === 'few clouds'){
    src = `https://source.unsplash.com/1820x900/?weather,cloud` ;
  
  }
  else  if(weather.description === 'clear sky'){
    src = `https://source.unsplash.com/1820x900/?weather,clearsky` ;
  
  }
  else  if(weather.description === 'scattered clouds'){
    src = `https://source.unsplash.com/1820x900/?weather,scatteredclouds` ;
  
  }
  else  if(weather.description === 'broken clouds'){
    src = `https://source.unsplash.com/1820x900/?weather,brokenclouds` ;
  
  }
  else  if(weather.description === 'shower rain'){
    src = `https://source.unsplash.com/1820x900/?weather,showerrain` ;
  
  }else  if(weather.description === 'thunderstorm'){
    src = `https://source.unsplash.com/1820x900/?weather,	thunderstorm` ;
  
  }else  if(weather.description === 'snow'){
    src = `https://source.unsplash.com/1820x900/?weather,snow` ;
  
  }else  if(weather.description === 'mist'){
    src = `https://source.unsplash.com/1820x900/?weather,mist` ;
  
  }else  if(weather.description === 'smoke'){
    src = `https://source.unsplash.com/1820x900/?weather,smoke` ;
  
  }
  else{
    src = `https://source.unsplash.com/1820x900/?weather,rain` ;
  }
 


  return (
   
    <div className="App" style ={{  backgroundImage:`url(${src})`}}>
      <div className="Navbar" >
    
    <span className ='wes' style={{color : 'orange' }}>24</span><Icon name='x'/><span className ='wes'>7 </span><span className ='wes'>CLOUDY</span><span className ='wes' style={{color : 'orange' }}>LIVE.com</span> <Icon name='cloud'/> 
   
   
  </div>
      <Form getWeather={fetchData} />
      <Weather
      icon ={weather.icon}
      city={weather.city}
      description={weather.description}
      temperature={weather.temperature}
      temperaturef={weather.temperaturef}
      error={weather.error}
      />
      {console.log(weather.data)}
    </div>
  );
}

export default App;
