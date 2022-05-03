import React, { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';
import Loading from './Loading';

const FetchingData = (number) => {
    const[posts, setPosts] = useState([]);

    const {data, loading, error} = useFetch('products/'+$number);

    if(loading){
        return  <Loading />;
    }
    return (<>
        { data.length && data.map((data) => {
            return(
                <div key ={data.id}>
                    {data.title},
                    {data.price},
                    {data.description},
                    {data.category},
                    {data.image},
                    {...data.rating}
                </div>    
        )})}  
        </>);}
        
export default FetchingData;