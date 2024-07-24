import React, { useEffect, useState } from "react";
import axios from 'axios';

function FetchData(){
    const [fetchData,setFetchData] = useState({});

    useEffect(() => {
        const getData = async () => {
          await axios.get('http://localhost:4000/api/message')
          .then(
            response => setFetchData(response.data))
        }
        getData();
      }, []);
    return (
        <>
            <h1>{fetchData.message}</h1>
        </>
    );
}

export default FetchData;