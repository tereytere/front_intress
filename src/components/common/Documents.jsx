import React, { useEffect, useState } from "react";
import instance from "../../api/apis";

function Documents() {

    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
         
          const response = await instance.get('/documents')
          setData(response.data['hydra:member']);
          // console.log(response.data['hydra:member'])
  
      }
  
      fetchData();
    }, []);
    
  return (
    <div >
        {data.map(int => {
                return(
                    <div key={int.id}>
                        <h3>{int.date}</h3>
                        <p>{int.description}</p> 
                    </div>
                )
            })} 

    </div>
  )
}

export default Documents