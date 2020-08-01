import React from 'react'
import './form.css';
import { Input,Button,Icon ,Container} from 'semantic-ui-react';
const Form = (props) => {
    return (
        <Container>
        <form onSubmit={props.getWeather}>
          <Input 
    icon={<Icon name='search' inverted circular link />}
    placeholder='Search...' name = 'city'
  />
       <br></br>    
       <br></br>  
            <Button color ='yellow'  icon={<Icon name='search' inverted circular link />}>search</Button>
        </form>
        </Container>
    )
   
}

export default Form; 