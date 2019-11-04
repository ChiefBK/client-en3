import React from 'react';

export default function Plex({ match }) {
    return <h3>Plex</h3>;
}

// function Plex(a) {
//     return (
//         <div>
//             <h2>Topics</h2>
//
//             <ul>
//                 <li>
//                     <Link to={`${a.match.url}/components`}>Components</Link>
//                 </li>
//                 <li>
//                     <Link to={`${a.match.url}/props-v-state`}>Props v. State</Link>
//                 </li>
//             </ul>
//
//             <Route path={`${a.match.path}/:id`} component={Topic} />
//             <Route
//                 exact
//                 path={a.match.path}
//                 render={() => <h3>Please select a topic.</h3>}
//             />
//         </div>
//     );
// }