import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { phoneNumberDisplayed: ''}
    }

    handlePhoneNumberChange = (event) => {
        const valueEntered = event.target.value;
        const rawNumber = valueEntered.replace(/\D/g, '').substring(0, 10);

        this.setState({ phoneNumberDisplayed: this.formatPhoneNumber(rawNumber), phoneNumberRaw: rawNumber })
        console.log(this.state);
    };

    handleSubmit = (event) => {
        console.log(event);
        event.target.disabled = true;
    };

    formatPhoneNumber = (rawNumber) => {
        const numberString = rawNumber.toString();
        const areaCode = numberString.slice(0, 3);
        const firstThree = numberString.slice(3, 6);
        const lastFour = numberString.slice(6, 10);

        let formatedNumber = '';

        if (areaCode.length > 0) {
            formatedNumber += `(${areaCode})`;
        }
        if (firstThree.length > 0) {
            formatedNumber += `-${firstThree}`;
        }
        if (lastFour.length > 0) {
            formatedNumber += `-${lastFour}`;
        }

        return formatedNumber;
    };

    render() {
        return (
            <div className={ `login__container` }>
                <div>
                    Please enter your phone number or email
                </div>
                <input type={ `tel` } value={this.state.phoneNumberDisplayed} onChange={this.handlePhoneNumberChange}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}