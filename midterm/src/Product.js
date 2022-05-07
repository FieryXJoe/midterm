import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import Loading from './Loading';

const Product = (props) => {
    const[posts, setPosts] = useState([]);

    const {data, loading, error} = useFetch(`products`, props.number);
    const navigate = useNavigate();

    if(loading){
        return  <Loading />;
    }
    return (<>
        { data.length && data.map((data) => {
            return(
                <>
                    <img src = {data.image}></img>
                    <div className='details-div'>
                        <h3>{data.category}</h3>
                        <h1>{data.title}</h1>
                        <h2>{data.price}</h2>                    
                        <h4>{data.description}</h4>
                        <button onClick = {() => navigate('/items')} className="button">
                            Items
                        </button>
                    </div>
                </>    
        )})}  
        </>);}
        
export default Product;