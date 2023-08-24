const logger = require("./logger");
const verifyInputs = (keys, data) => {
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] in data) {
      continue;
    } else {
      logger.warn(keys[i]);
      return false;
    }
  }
  for (let z = 0; z < Object.keys(data).length; z++) {
    if (keys.includes(Object.keys(data)[z])) {
      continue;
    } else {
      logger.warn(Object.keys(data)[z]);
      return false;
    }
  }
  return true;
};

const validateInputs = (required_keys, data) => {
  for (let i = 0; i < required_keys.length; i++) {
    if (data.hasOwnProperty(required_keys[i])) {
      const value = data[required_keys[i]];
      if (value === null || value === undefined) {
        logger.warn(data[required_keys[i]]);
        return false;
      }
      if (typeof value === "string" && !value.trim()) {
        logger.warn(data[required_keys[i]]);
        return false;
      }
      if (Array.isArray(value) && value.length === 0) {
        logger.warn(data[required_keys[i]]);
        return false;
      }
    }
  }
  return true;
};

module.exports = {
  verifyInputs,
  validateInputs,
};
