import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { ProductType } from '../types/ProductType';

const baseURL = 'http://localhost:3000/'

const useFetchOneProduct = (endURL:string, num:any) => {
    const[loading, setLoading] = useState<boolean>(true);
    const[data, setData] = useState<ProductType[]>([]);
    const[error, setError] = useState<string>('');

    useEffect(() => {
        const getData = async () => {
            try{
                const response = await axios.get(`${baseURL}${endURL}/?id=${num}`);
                setData(response.data);
            }catch (error : any){
                setError(error);
            }finally{
                setLoading(false);
            }
        };
        getData();
    }, [endURL]);

    return {data, loading, error};
}

export default useFetchOneProduct;