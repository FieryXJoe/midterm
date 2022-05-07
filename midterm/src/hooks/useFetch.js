import React, {useEffect, useState} from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:3000/'

const useFetch = (endURL, num) => {
    const[loading, setLoading] = useState(true);
    const[data, setData] = useState([]);
    const[error, setError] = useState('');

    useEffect(() => {
        const getData = async () => {
            try{
                const response = await axios.get(`${baseURL}${endURL}`, {params:{id:num}});
                setData(response.data);
            }catch (error){
                setError(error);
            }finally{
                setLoading(false);
            }
        };
        getData();
    }, [endURL]);

    return {data, loading, error};
}

export default useFetch;