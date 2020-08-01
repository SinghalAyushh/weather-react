import React from 'react'
import { Header,Segment} from 'semantic-ui-react';

const Weather = ({description, city,  error, temperature,icon, temperaturef}) => {
    return (
        <div>
            <img src ={"http://openweathermap.org/img/wn/"+icon+"@2x.png"}/>
            {city && <p>{city}</p>}
            <br></br>
            <div >

    <Segment circular >
      <Header as='h2'>
        {temperature}°C
       
      </Header>
    </Segment>
    <Segment circular inverted >
      <Header as='h2' inverted>
      
      {temperaturef}°F
      </Header>
       
    </Segment>
    <br></br>
  </div>

            {description && <p> Conditions: {description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather; 