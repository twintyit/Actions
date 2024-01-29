import React from "react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Favorite = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        const favoritesCookie = Cookies.get('favorites');
        if (favoritesCookie) {
            const favoritesArray = JSON.parse(favoritesCookie);
            setData(favoritesArray);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const deleteItem = (item) => {
        const favoritesArray = data.filter((favItem) => favItem.id !== item.id);
        Cookies.set('favorites', JSON.stringify(favoritesArray), { path: '/' });
        getData();
    };

    return (
        <>
            {data && (
                <ul className="content">
                    {data.map((item, index) => (
                        <li className="home-blocks" key={index} >
                            <img className="image" src={item.image} alt="" />
                            <h3>{item.title}</h3>
                            <button onClick={() => deleteItem(item)} className="button">Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )

}

export default Favorite;
