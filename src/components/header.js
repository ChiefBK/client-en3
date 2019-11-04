import React from 'react';
import {Link} from "react-router-dom";

export default function Header({match, location}) {
    return (
        <nav className="navigation__container">
            <ul>
                <li>
                    <Link className={'icon'} to="/">
                        <div className="navigation__header-icon"></div>
                    </Link>
                </li>
                <li>
                    <Link className={'text-link-header ' + (location.pathname === '/events' ? 'selected' : '')} to="/events">EVENTS</Link>
                </li>
                <li>
                    <Link className={'text-link-header ' + (location.pathname === '/' ? 'selected' : '')} to="/">HOME</Link>
                </li>
                <li>
                    <Link className={'text-link-header ' + (location.pathname === '/plex' ? 'selected' : '')} to="/plex">PLEX</Link>
                </li>
            </ul>
        </nav>
    );
}
