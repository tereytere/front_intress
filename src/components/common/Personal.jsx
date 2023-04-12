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
    <div className='card'>
        {data.map(int => {
                return(
                    <div className='card-body' key={int.id}>
                        <h3 className='card-title'>{int.name}</h3>
                        <p className='card-title'>{int.surname}</p>
                        <p className='card-title'>{int.rol}</p>  
                        <img className='card-img' src={int.image} alt={int.name} /> 
                        
                    </div>
                )
            })} 
    </div>
    )
}

export default Personal