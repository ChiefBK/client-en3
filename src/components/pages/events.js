import React from 'react';

export default class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = { events: [] };
    }

    componentDidMount() {
        fetch('/api/events', {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((eventArr) => {
                this.setState({
                    events: eventArr
                })
            })
    }

    render() {
        const events = [];

        for (const event of this.state.events) {
            events.push(<div className="event__list-item" key={ event.id }>{ event.name }</div>);
        }

        return (
            <div>
                <h2>Events</h2>
                <div className="event__list-container">
                    <hr />
                    { events }
                </div>
            </div>
        );
    }
}