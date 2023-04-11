import React, { useEffect, useState } from "react";
import instance from "../../api/apis";

function Personal() {
    
    const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
       
        const response = await instance.get('/personals')
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
                        <h3>{int.name}</h3>
                        <p>{int.surname}</p> 
                        <p>{int.image}</p> 
                        <p>{int.rol}</p> 
                    </div>
                )
            })} 
    </div>
  )
}

export default Personal