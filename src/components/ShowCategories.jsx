import React from "react";
import { useEffect, useReducer } from "react";
import Data from "../Data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { reducer, initialState, actionTypes } from "../actions/actionTypes";


const ShowCategories = () => {
    const { category } = useParams();
    const [state, dispatch] = useReducer(reducer, initialState);

    const sortData = (data) => {
        if (category && data) {
            const filteredData = data.filter((item) => item.category === category);
           return filteredData;
        }
    }

    const getData = () => {
        if (category) {
            const dataByCategory = Data.getItemByCategory(category);
            return dataByCategory;
        }
    }

    useEffect(() => {
        const data = getData();
        const filteredData = sortData(data);
        dispatch({
            type: actionTypes.SET_DATA_BY_CATEGORY,
            payload: filteredData,
        });
    }, [category]);

    return (
        <>
            {state.dataByCategory && (
                <ul className="content">
                    {state.dataByCategory && state.dataByCategory.map((item, index) => (
                        <Link className="link" to={`/${item.category}/${item.id}`} key={index}>
                            <li className="home-blocks" >
                                <img className="image" src={item.image} alt="" />
                                <h3>{item.title}</h3>
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </>
    )
}
export default ShowCategories;