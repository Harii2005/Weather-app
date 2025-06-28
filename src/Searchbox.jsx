import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "01966308a0b0850ae0e57a5f4aa57c38";

    let [city , setCity] = useState("")
    let[error , setError] = useState(false);

    let getWeatherInfo = async()=>{//whenever we make an API call make the function Synchronous bez fectch data can take time!!..
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);//&units=metric is used to mkae the temperature , etc in readable form
            let jsonResopnse = await response.json();
            console.log(jsonResopnse);
            let result = {
                city        : city , 
                temp        : jsonResopnse.main.temp,
                tempMin     : jsonResopnse.main.temp_min,
                tempMax     : jsonResopnse.main.temp_max,
                humidity    : jsonResopnse.main.humidity,
                feels_like  : jsonResopnse.main.feels_like,
                description : jsonResopnse.weather[0].description,
            }
            console.log(result);
            return result;
        }catch(err){
            throw(err)
        }


    }
    let handleChange = (event) =>{
        setCity(event.target.value) 
    }

    let handleSubmitChange = async (event) =>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo =  await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }

    }

    return(
        <div className='searchbox'>
            <h3>search for weather</h3>
            <form onSubmit={handleSubmitChange}>
                <TextField 
                    id="outlined-basic" 
                    label="city-name" 
                    variant="outlined" 
                    required 
                    value={city}  
                    onChange={handleChange}
                />
                <br></br><br/>
                <Button type='submit' variant="contained">search</Button>
                {error && <p style={{color : "red"}}>no such place exists</p>}
            </form>
            
        </div>
    )

}