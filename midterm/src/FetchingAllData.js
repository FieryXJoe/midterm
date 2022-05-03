import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import Loading from './Loading';

const FetchingAllData = () => {
    const[posts, setPosts] = useState([]);
    const navigate = useNavigate;

    const {data, loading, error} = useFetch('products');

    if(loading){
        return  <Loading />;
    }
    return (<>
        { data.length && data.map((data) => {
            return(
                <>
                <table key ={data.id}>
                    <tr onClick = {() => navigate('display-item/ + {data.id}')}>
                        <th>{data.title}</th>
                        <th><img src = {data.image} /></th>
                    </tr>
                </table>    
                </>
        )})}  
        </>);}
        
export default FetchingAllData;