import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ShowCategories from "./ShowCategories";
import EventDetails from "./EventDetails";
import Favorite from "./Favorite";
import Form from "./Form";

const NavPanel = () => {
    const linkStyle = {
        display: 'grid',
        color: 'white',
        width: '100%',
        height: '100%',
        justifyItems: 'center',
        alignItems: 'center',
    }

    return (
        <>
            <Router>
                <ul className="nav-panel">
                    <li className="nav-button"><Link style={linkStyle} to={"/"}>Головна сторiнка</Link></li>
                    <li className="nav-button"><Link style={linkStyle} to={"/form"}>Додати подiю </Link></li>
                    <li className="nav-button"><Link style={linkStyle} to={"/favorite"}>Обраннi</Link></li>
                </ul>
                <div className='container'>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/:category" element={<ShowCategories/>}></Route>
                        <Route path="/:category/:id" element={<EventDetails/>}></Route>
                        <Route path="/favorite" element={<Favorite/>}></Route>
                        <Route path="/form" element={<Form />}></Route>
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default NavPanel;