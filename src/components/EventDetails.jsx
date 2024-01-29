import React from "react";
import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Data from "../Data";
import Cookies from 'js-cookie';
import { reducer, initialState, actionTypes } from "../actions/actionTypes";

const EventDetails = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { id } = useParams();

    useEffect(() => {
        const data = Data.getItemById(id);
        dispatch({
            type: actionTypes.SET_ITEM,
            payload: data,
        })
    }, [])

    const addToFavorites = (item) => {
        const favoritesCookie = Cookies.get('favorites');
        const favoritesArray = favoritesCookie ? JSON.parse(favoritesCookie) : [];
        const isAlreadyAdded = favoritesArray.some((favItem) => favItem.id === item.id);

        if (!isAlreadyAdded) {
            favoritesArray.push(item);
            Cookies.set('favorites', JSON.stringify(favoritesArray), { path: '/' });
        }
    }

    return (
        <>
            {state.item &&
                <div className="details-block">
                    <h3>{state.item.title}</h3>
                    <img height={550} src={state.item.image} alt="" />
                    <h4>{state.item.date}</h4>
                    <p>{state.item.description}</p>
                    <button onClick={() => addToFavorites(state.item)} className="button">Add to favorite</button>
                </div>
                }
        </>
    )
}
export default EventDetails;