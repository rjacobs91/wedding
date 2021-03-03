/**
 * Exports a client for the API exposed by the server.
 */

'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class APIClient {

    constructor(apiUrl) {
        this._apiUrl = apiUrl;
    }

    /**
     * Submits a new RSVP request to the server. Does not require any authentication.
     * 
     * @param guest (required) - JSON
     * @param willAttend (required) - boolean
     * @param callbackFn - Function to invoke with the outcome from the RSVP operation with the
     *  following arguments:
     *      errorMsg - Message string with information about the error which occurred or undefined
     *      response - Response string on success or undefined if an error
     */
    rsvp(guest, willAttend, callbackFn) {
        const requestBody = {
            guest: guest,
            willAttend: willAttend,
        };

        fetch(this._apiUrl, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .catch(function (err) {
                callbackFn('Boo, looks like your internizzle is acting up, but there might also be a bug :( Call us?');
            })
            .then(function (res) {
                if (res.status === 200) {
                    callbackFn(undefined, res);
                } else if (res.status === 400) {
                    callbackFn('Please give us a valid unused RSVP code')
                } else {
                    callbackFn('Boo, something went wrong, most likely a bug :( Call us?');
                }
            });
    }
}

export default APIClient;
