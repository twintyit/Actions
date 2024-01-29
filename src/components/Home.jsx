import React from "react";
import { useEffect, useReducer } from "react";
import Data from "../Data";
import { Link } from "react-router-dom";
import { reducer, initialState, actionTypes } from "../actions/actionTypes";

const Home = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getCategories = () => {
        const categoriesMap = new Map();

        Data.eventsData.forEach((item) => {
            const { category, image } = item;
            if (!categoriesMap.has(category)) {
                categoriesMap.set(category, { img: image, category });
            }
        });

        const uniqueCategories = Array.from(categoriesMap.values());

        dispatch({
            type: actionTypes.SET_DATA,
            payload: Data.eventsData,
        });

        dispatch({
            type: actionTypes.SET_CATEGORIES,
            payload: uniqueCategories,
        });
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div>
            {state.data && (
                <ul className="content">
                    {state.categories.map((item, index) => (
                        <Link className="link" to={`/${item.category}`} key={index}>
                            <li className="home-blocks">
                                <img className="image" src={item.img} alt="" />
                                <h3>{item.category}</h3>
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default Home;

