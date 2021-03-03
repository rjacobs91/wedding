/**
 * Contains the RSVP code information model.
 */

'use strict';

import mongoose from "mongoose";

const RSVPCodeSchema = new mongoose.Schema({
  code: { type: String, required: true },
  consumed: { type: Boolean, required: true }
});

module.exports = mongoose.model('RSVPCode', RSVPCodeSchema);
