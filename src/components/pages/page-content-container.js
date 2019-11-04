import React from 'react';

export default function PageContentContainer(props) {
    return (
        <div className="content__container">
            {props.children}
        </div>
    )
}