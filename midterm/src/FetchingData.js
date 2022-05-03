import React, { useEffect, useState } from 'react';
import useFetchID from './hooks/useFetchID';
import Loading from './Loading';

const FetchingData = (props) => {
    const[posts, setPosts] = useState([]);

    const {data, loading, error} = useFetchID(`products`, props.number);

    if(loading){
        return  <Loading />;
    }
    return (<>
        { data.length && data.map((data) => {
            return(
                <>

                    {data.title},
                    {data.price},
                    {data.description},
                    {data.category},
                    {data.image}
                </>    
        )})}  
        </>);}
        
export default FetchingData;