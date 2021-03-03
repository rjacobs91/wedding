/**
 * Implements the server API.
 */

'use strict';

import bodyParser from 'body-parser';
import express from 'express';
import uuidV1 from 'uuid/v1';
import winston from 'winston';

import RSVP from './models/RSVP';
import RSVPCode from './models/RSVPCode'

// Setup the web server handlers
const ServerAPI = express();

// Ensure we can parse JSON-encoded requests
ServerAPI.use(bodyParser.json());

// Help for the web service
ServerAPI.all('/', function (req, res) {
    res.status(400).json({
        name: 'Katie and Russell\'s wedding website API',
        version: process.env.npm_package_version,
        availableAPIs: {
            rsvp: {
                help: 'Log an RSVP for a couple',
            },
        },
    });
});

// The 'rsvp' command
ServerAPI.post('/rsvp', function (req, res) {
    const requestId = uuidV1();
    winston.log('debug', 'rsvp request', requestId, req.body);

    const guestRSVPDocument = {
        rsvpId: requestId,
        guest: req.body.guest,
        willAttend: req.body.willAttend,
    };

    let code = 200;
    let responseJson = {
        requestId: requestId,
    }

    // TODO: this callback code works but is crap. Need to clean this up
    RSVPCode.findOne({code: guestRSVPDocument.guest.code}, function (err, rsvpCode) {
        if (err) {
            winston.log('info', 'mongodb read failed', requestId, req.body, err);
            code = 500;
            responseJson.error = 'Failed to read RSVP codes from database';
            res.status(code).json(responseJson);
        } else if (!rsvpCode || rsvpCode.consumed) {
            winston.log('info', 'invalid rsvp code submitted', requestId, req.body, err);
            code = 400;
            responseJson.error = 'An invalid RSVP code was submitted';
            res.status(code).json(responseJson);
        } else {
            RSVP(guestRSVPDocument).save(function (err) {
                if (err) {
                    winston.log('info', 'mongodb write failed', requestId, req.body, err);
                    code = 500;
                    responseJson.error = 'Failed to persist reservation to database';
                    res.status(code).json(responseJson);
                } else {
                    RSVPCode.update({code: guestRSVPDocument.guest.code}, {$set: {consumed:true}}, function (err) {
                        if (err) {
                            winston.log('info', 'mongodb write failed', requestId, req.body, err);
                            code = 500;
                            responseJson.error = 'Failed to persist RSVP code update to database';
                            res.status(code).json(responseJson);
                        } else {
                            winston.log('debug', 'rsvp response', requestId, responseJson);
                            res.status(code).json(responseJson);
                        }
                    })
                }
            });
        }
    })
});

export default ServerAPI;
