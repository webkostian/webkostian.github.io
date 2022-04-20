import {Link, NavLink} from "react-router-dom";
import './appHeader.scss';

const AppHeader = () => {

    const activStyles = {
        'color':'#9f0013'
    };

    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink exact activeStyle={activStyles} to="/">Characters</NavLink></li>
                    /
                    <li><NavLink exact activeStyle={activStyles} to="/comics">Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;
