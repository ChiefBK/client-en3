import React from 'react';

export default class InputPhoneNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = { phoneNumberDisplayed: '', phoneNumberRaw: ''};
    }

    handlePhoneNumberChange = (event) => {
        const valueEntered = event.target.value;
        const rawNumber = valueEntered.replace(/\D/g, '').substring(0, 10);

        this.setState({ test: 'test', valueEntered: valueEntered, phoneNumberDisplayed: this.formatPhoneNumber(rawNumber), phoneNumberRaw: rawNumber })
        this.props.onPhoneNumberChange(rawNumber);
    };

    formatPhoneNumber = (rawNumber) => {
        const numberString = rawNumber.toString();
        const areaCode = numberString.slice(0, 3);
        const firstThree = numberString.slice(3, 6);
        const lastFour = numberString.slice(6, 10);

        let formattedNumber = '';

        if (areaCode.length > 0) {
            formattedNumber += `(${areaCode})`;
        }
        if (firstThree.length > 0) {
            formattedNumber += `-${firstThree}`;
        }
        if (lastFour.length > 0) {
            formattedNumber += `-${lastFour}`;
        }

        return formattedNumber;
    };

    render() {
        return (
            <input type={ `tel` } value={this.state.phoneNumberDisplayed} onChange={this.handlePhoneNumberChange}/>
        )
    }
}