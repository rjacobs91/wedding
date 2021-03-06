/**
 * Implements the reservation form wizard and interaction with the server.
 *
 * id (string): Identifier for the element
 */

'use strict';

import APIClient from '../api/api-client';
import isEmail from 'validator/lib/isEmail';
import React from 'react';
import isUUID from 'validator/lib/isUUID';

// For compatibility with older Internet Explorer browsers
require('es6-object-assign').polyfill();

/**
 * Implements the RSVP form.
 */
class RSVPForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            guestInfo: {},
            submitStatus: null,
        };
    }

    render() {
        var self = this;

        const guestInfo = this.state.guestInfo;

        return (
            <div id={this.props.id} className="wizard-form">
                <p>Please complete the form below to let us know if you will be
                    joining us at Shottle Hall and to inform us of your dietary
                    restrictions if any, for the evening meal. If you have lost
                    your RSVP code please contact us for a new one.
                </p>
                <br />

                <p>Fields marked with * are mandatory.</p>
                <br />

                {this.renderTextInput('name', 'Name*:', guestInfo)}
                {this.renderTextInput('email', 'Email*:', guestInfo)}
                {this.renderTextInput('code', 'RSVP Code*:', guestInfo)}
                <br />

                {this.renderRadioInput(
                    'attendance',
                    'Attendance*:',
                    [
                        { label: 'I WILL BE ATTENDING', value: 'yes' },
                        { label: 'I WILL NOT BE ATTENDING', value: 'no' }
                    ],
                    guestInfo)
                }
                <br />

                {guestInfo.attendance === 'yes' &&
                    <div>
                        {this.renderRadioInput(
                            'meal',
                            'Entreé preference*:',
                            [
                                { label: 'I EAT MEAT', value: 'meat' },
                                { label: 'I DO NOT EAT MEAT', value: 'vegetarian' }
                            ],
                            guestInfo)}
                        <br />

                        {this.renderTextInput(
                            'dietaryRestrictions',
                            'Any other dietary restrictions?',
                            guestInfo)}
                        <br />

                        {this.renderRadioInput(
                            'eveningBefore',
                            'Will you be joining us for the evening on 31 July (day before the wedding)*?',
                            [
                                { label: 'YES', value: 'yes' },
                                { label: 'NO', value: 'no' }
                            ],
                            guestInfo)}
                        <br />

                        {this.renderRadioInput(
                            'nextDayHike',
                            'Will you be joining us for a hike on 2 August (day after the wedding)*?',
                            [
                                { label: 'YES', value: 'yes' },
                                { label: 'NO', value: 'no' }
                            ],
                            guestInfo)}
                        <br />
                    </div>
                }
                <br />

                {this.state.submitStatus &&
                    <div className={this.state.submitStatus.isError ? 'alert-error' : 'alert-success'}>
                        <span className="alert-closebtn"
                            onClick={() => { self.state.submitStatus = null; self.setState(self.state); }}>&times;</span>
                        {this.state.submitStatus.message}
                    </div>
                }
                <br />

                <button onClick={this.submitRSVP.bind(this)}>Submit</button>
            </div>
        );
    }

    /**
     * Validates that the form can be submitted and returns null on success or a string message with
     * the validation error otherwise.
     */
    validate() {
        function validateGuestDetail(info) {
            if (!info.meal)
                return "Please let us know of your or your guest's meal preference";
            if (!info.eveningBefore)
                return 'Please let us know whether you will be joining us for the evening on the day before the wedding';
            if (!info.nextDayHike)
                return 'Please let us know whether you will be joining us for the hike on the day after the wedding';

            return null;
        }

        const guestInfo = this.state.guestInfo;

        if (!guestInfo.name || guestInfo.name.trim().empty)
            return 'Please give us your name';

        if (!guestInfo.email || guestInfo.email.trim().empty || !isEmail(guestInfo.email))
            return 'Please give us your valid email';

        if (!guestInfo.code || guestInfo.code.trim().empty || !isUUID(guestInfo.code))
            return 'Please give us a valid unused RSVP code';

        if (!guestInfo.attendance)
            return 'Please specify whether you will be joining us';

        if (guestInfo.attendance === 'no')
            return null;

        return validateGuestDetail(guestInfo);
    }

    /**
     * Renders a text input with a label. Gets its state and updates the specified @stateObj.
     */
    renderTextInput(name, label, stateObj) {
        const self = this;
        const value = stateObj[name];

        function onChange(event) {
            stateObj[name] = event.target.value;
            self.setState(self.state);
        }

        return (
            <div className="rsvp-section">
                <label>{label}</label>
                <input type="text"
                    name={name}
                    value={value}
                    onChange={onChange} />
            </div>
        );
    }

    /**
     * Renders a text input with a label and the specified set of options. Gets its state and
     * updates the specified @stateObj.
     *
     * The format of the options is an array of JSON objects with the following properties:
     *  label - Label of the option
     *  value - Value of the option to be set on the @stateObj
     */
    renderRadioInput(name, label, options, stateObj) {
        const self = this;
        const value = stateObj[name];

        function onChange(event) {
            stateObj[name] = event.target.value;
            self.setState(self.state);
        }

        return (
            <div className="rsvp-section">
                <label>{label}</label>
                {
                    options.map(function (option) {
                        return (
                            <div key={option.value}>
                                <input type="radio"
                                    value={option.value}
                                    checked={value === option.value}
                                    onChange={onChange} />
                                <label>{option.label}</label>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    /**
     * Retrieves the client for the web service API.
     */
    getAPIClient() {
        return new APIClient(document.location.protocol + '//' + document.location.host + '/api/rsvp');
    }

    /**
     * Takes the collected wizard input across all forms and submits it to the database.
     */
    submitRSVP() {
        const self = this;
        const state = this.state;

        if (this.validate()) {
            self.state.submitStatus = { isError: true, message: this.validate() };
            self.setState(self.state);
            return;
        }

        var guestInfo = Object.assign({}, state.guestInfo);

        // TODO: This is a hack, find a way to properly construct the request
        const willAttend = guestInfo.attendance === 'yes';
        delete guestInfo['attendance'];

        this.getAPIClient().rsvp(guestInfo, willAttend, function (errorMsg, successMsg) {
            if (errorMsg) {
                self.state.submitStatus = { isError: true, message: errorMsg };
                self.setState(self.state);
            } else {
                self.state.submitStatus = {
                    isError: false, message: 'Your response was recorded successfully. Thank you!'
                };
                self.setState(self.state);
            }
        });
    }
}

export default RSVPForm;
