import React, { useEffect, useState } from "react";
import instance from "../../api/apis";

function Signin() {
    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
         
          const response = await instance.get('/signins')
          setData(response.data['hydra:member']);
          // console.log(response.data['hydra:member'])
  
      }
  
      fetchData();
    }, []);
    
    

  return (
    <div>
        {data.map(int => {
                return(
                    <div key={int.id}>
                        <h3>{int.timestart}</h3>
                        <p>{int.timestop}</p> 
                        <p>{int.timefinish}</p>
                        <p>{int.hourcount}</p>
                    </div>
                )
            })} 
    </div>
  )
}

export default Signin