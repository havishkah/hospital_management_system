const ApiError = require("./errors");
const mongoose = require("mongoose");
const logger = require("../logger");

function apiErrorHandler(err, req, res, next) {
  if (err instanceof ApiError) {
    res.status(err.code).json({ message: err.message });
    logger.warn(err.message);
    return;
  } else if (err instanceof mongoose.Error.ValidationError) {
    const message = Object.values(err.errors).map((value) => value.message);
    res.status(422).json({ message: message });
    logger.warn(err.message);
    return;
  } else if (err instanceof mongoose.Error.CastError) {
    const message = Object.values(err.errors).map((value) => value.message);
    res.status(422).json({ message: message });
    logger.warn(err.message);
    return;
  } else if (err instanceof mongoose.Error.DocumentNotFoundError) {
    const message = Object.values(err.errors).map((value) => value.message);
    res.status(422).json({ message: message });
    logger.warn(err.message);
    return;
  } else if (err instanceof mongoose.Error.MissingSchemaError) {
    const message = Object.values(err.errors).map((value) => value.message);
    res.status(422).json({ message: message });
    logger.warn(err.message);
    return;
  } else if (err instanceof mongoose.Error.OverwriteModelError) {
    const message = Object.values(err.errors).map((value) => value.message);
    res.status(422).json({ message: message });
    logger.warn(err.message);
    return;
  } else if (err instanceof mongoose.Error.ParallelSaveError) {
    const message = Object.values(err.errors).map((value) => value.message);
    res.status(422).json({ message: message });
    logger.warn(err.message);
    return;
  } else if (err instanceof mongoose.Error.ValidatorError) {
    const message = Object.values(err.errors).map((value) => value.message);
    res.status(422).json({ message: message });
    logger.warn(err.message);
    return;
  } else if (err.code == 11000) {
    res.status(409).json({
      message: "Some values already exist. Please try with another values.",
    });
    logger.warn(err.message);
    return;
  } else if (err.code == "LIMIT_FILE_SIZE") {
    //multer file size too large error catch
    res.status(400).json({
      message: err.message,
    });
    logger.warn(err.message);
    return;
  }
  //multer file format error catch
  else if (err.message == "FileFormatError") {
    res.status(400).json({
      message: "Please upload png or jpg image.",
    });
    logger.warn("Please upload png or jpg image.");
    return;
  }
  //multer file format error 2 catch
  else if (err.message == "FileFormatError2") {
    res.status(400).json({
      message: "Please upload zip or rar document.",
    });
    logger.warn("Please upload zip or rar document.");
    return;
  }
  //Requested file cannot open error
  else if (err.errno == -4058) {
    res.status(404).json({
      message: "Requested file couldn't found.",
    });
    logger.warn(err.message);
    return;
  }
  //JWT error handlers
  else if (err.name == "TokenExpiredError") {
    res.status(403).json({
      message: "JWT token expired",
    });
    logger.warn(err.message);
    return;
  }
  //JWT error handlers
  else if (err.name == "JsonWebTokenError") {
    res.status(403).json({
      message: err.message,
    });
    logger.warn(err.message);
    return;
  }

  //Catch other errors
  res.status(503).json({ message: "Service Unavailable" });
  logger.error(err);
  
}
module.exports = apiErrorHandler;
