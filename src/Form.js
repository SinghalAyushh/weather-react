import React from 'react'
import './form.css';
import { Input,Button,Icon ,Container} from 'semantic-ui-react';
const Form = (props) => {
    return (
        <Container>
        <form onSubmit={props.getWeather}>
          <Input 
    icon = 'search'
    placeholder='Search...' name = 'city'
  />
       <br></br>    
       <br></br>  
            <Button color ='yellow' style={{Size:'lg'}}  icon={<Icon name='search' inverted circular link />}>search</Button>
        </form>
        </Container>
    )
   
}

export default Form; 