const config = require("../../../configuration/index")
const Cryptr = require("cryptr");

const KEY = config.ENC_KEY;
const cryptr = new Cryptr(KEY);

const encryption = (value) => {
  return cryptr.encrypt(value);
};

const decryption = (value) => {
  return cryptr.decrypt(value);
};

module.exports = {
  encryption,
  decryption
};
