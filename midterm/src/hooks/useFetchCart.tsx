import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { CartType } from '../types/CartType';

const baseURL = 'http://localhost:3000/'

const useFetchCart = (endURL:string, num:any) => {
    const[loading, setLoading] = useState<boolean>(true);
    const[data, setData] = useState<CartType[]>([]);
    const[error, setError] = useState<string>('');

    useEffect(() => {
        const getData = async () => {
            try{
                const response = await axios.get(`${baseURL}${endURL}`, {params:{title:num}});
                setData(response.data);
            }catch (error : any){
                setError(error);
            }finally{
                setLoading(false);
            }
        };
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [endURL]);

    return {data, loading, error};
}

export default useFetchCart;