import React, {  useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import dishes from '../dishes'

const DishDetails = () => {
    const{id}=useParams()
    const [meal, setMeal]=useState({})
    useEffect(()=>{
        setMeal(dishes.find(el=>el.id===+id))
    },[id])
    return (
        <div className="dishMain">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mt-2">
                        <img src={meal.image} alt="" className="w-100"/>
                    </div>
                    <div className="col-md-7">
                        <h2 className="text-white"> {meal.title}</h2>
                        <p className="text-white">Description: {meal.description}</p>
                        <div className="text-white">Price: {meal.price}</div>
                    </div>
                </div>
        </div>


        </div>
    );
};

export default DishDetails;