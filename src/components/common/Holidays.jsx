import React, { useEffect, useState } from "react";
import instance from "../../api/apis";

function Holidays() {
   
    const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
       
        const response = await instance.get('/holidays')
        setData(response.data['hydra:member']);
        // console.log(response.data['hydra:member'])

    }

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.date}</p>
      ))}
    </div>
  );

}

export default Holidays
