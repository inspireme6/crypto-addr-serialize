'use strict';

const { b32decode, b32encode, hex2a, ua2hex } = require('./nem-sdk/convert');
const { bs58Decode, bs58Encode } = require('./bs58/bs58');
const { cashdecode, cashencode } = require('./cashaddr/cashaddr');
const { codec } = require('./ripple/xrp-codec');
const { isValidChecksumAddress, stripHexPrefix, toChecksumAddress } = require('./rskjs/rsk');
const eosPublicKey = require('./eos/key_public');
const { encodeCheck, decodeCheck, calculateChecksum } = require('./str/publicKey');
const { ss58Encode, ss58Decode } = require('./ss58');

module.exports = {
    b32decode,
    b32encode,
	bs58Decode,
	bs58Encode,
	cashencode,
	cashdecode,
    hex2a,
    ua2hex,
    isValidChecksumAddress,
    stripHexPrefix,
    toChecksumAddress,
    codec,
    eosPublicKey,
    encodeCheck,
    decodeCheck,
    calculateChecksum,
    ss58Encode,
    ss58Decode,
};
