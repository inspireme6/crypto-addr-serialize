'use strict';

const { b32decode, b32encode, hex2a, ua2hex } = require('./nem-sdk/convert');
const { codec } = require('./ripple/xrp-codec');
const { isValidChecksumAddress, stripHexPrefix, toChecksumAddress } = require('./rskjs/rsk');
const eosPublicKey = require('./eos/key_public');
const { encodeCheck, decodeCheck, calculateChecksum } = require('./str/publicKey');

module.exports = {
    b32decode,
    b32encode,
    hex2a,
    ua2hex,
    isValidChecksumAddress,
    stripHexPrefix,
    toChecksumAddress,
    codec,
    eosPublicKey,
    encodeCheck,
    decodeCheck,
    calculateChecksum
};
