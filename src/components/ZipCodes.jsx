//{} <- these brackets destructures to acess objs within objs
//is the same as Class className extends React.Component {} 
import React, {useState} from "react"; 
import axios from "axios";
//in order to use this use >npm install axios> in terminal and make sure youre in the right cs
//no render function just return function when using functional component

const ZipCodes = () => {
   const[distance, setDistance] = useState({});
   const[zip1, setZip1] = useState("");
   const[zip2, setZip2] = useState("");

   //handling the search click
   //async because dealing with apis
   //async function will occur after user clicks search, the useEffect will call API
   //after each key inputted (5 then 4 then so on)
   async function handleSearch(){
        try {
            const zipList = await axios.get(`https://zip-api.eu/api/v1/distance/US-${zip1}/US-${zip2}`);

        
            setDistance(zipList.data);
            console.log(zipList.data)
            
        } catch (error) {
            console.error(error);
            alert("Require a zip code");
        }
   }

   function handleZip1(event){
        setZip1(event.target.value);
   }

   function handleZip2(event){
        setZip2(event.target.value);
   }

   //console.log(zip);
   //this is where we will be implementing html
    return (
        <>
            <div id= "content"> 
                <h1>Find Distance Between ZipCodes :3!</h1>
                <input
                    type="text"
                    value={zip1}
                    onChange = {handleZip1}
                    placeholder="Enter first zipcode"
                />
                <input
                    type="text"
                    value={zip2}
                    onChange = {handleZip2}
                    placeholder="Enter second zipcode"
                />
                <button onClick={handleSearch}>Search</button>
                    <h2>Zip Code Distance Details:</h2>
                    <h4>Distance: {distance.distance}</h4>
                    <h4>Units: {distance.unit}</h4>

            </div>
        </>
    )
    
}

export default ZipCodes;