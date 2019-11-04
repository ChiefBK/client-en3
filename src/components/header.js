import React from 'react';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <nav className="navigation__container">
            <ul>
                <li>
                    <Link to="/">
                        <div className="navigation__header-icon"></div>
                    </Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/plex">Plex</Link>
                </li>
            </ul>
        </nav>
    );
}
