import React from 'react';

import InputPhoneNumber from "../input-phone-number";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSubmit = (event) => {
        console.log(this.state);


        event.preventDefault();
    };

    onPhoneNumberChange = (rawPhoneNumber) => {
        this.setState({ phoneNumber: rawPhoneNumber });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={ `login__container` }>
                    <div>
                        Please enter your phone number or email
                    </div>
                    <InputPhoneNumber onPhoneNumberChange={this.onPhoneNumberChange} />
                    <input type={`submit`} value={`Submit`} />
                </div>
            </form>
        )
    }
}