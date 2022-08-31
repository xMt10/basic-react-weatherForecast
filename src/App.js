import axios from "axios";
import { useEffect,useState } from "react";
import City from "./City";
import "./app.css"


function App() {
  const key= "0f11fe7e2e6c80ed4125ca07cbfd1b11";
  const [city,setCity] = useState();
  const [search, setSearch] = useState("");

   useEffect(()=> {
    
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();

  },[search])

    return (
      <div className="cont">
       <div >
       <h1>WEATHER FORECAST</h1>
        <input
          onChange={(event) => setSearch(event.target.value)} type="text"
          placeholder="Enter a city" className="inputText"
        />
       {city && <City city={city} /> }
      </div>
      </div>
    );
  }
  
  export default App;
