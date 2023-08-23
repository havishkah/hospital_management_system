const ApiError = require("./errors");

const mongoose = require("mongoose");

const logger = require("../logger");



function apiErrorHandler(err, req, res, next) {

  let statusCode = 503;

  let message = "Service unavailable.";



  if (err instanceof ApiError) {

    statusCode = err.code;

    message = err.message;

  } else if (err instanceof mongoose.Error.ValidationError) {

    message = Object.values(err.errors).map((value) => value.message);

    statusCode = 422;

  } else if (

    err instanceof mongoose.Error.CastError ||

    err instanceof mongoose.Error.DocumentNotFoundError ||

    err instanceof mongoose.Error.MissingSchemaError ||

    err instanceof mongoose.Error.OverwriteModelError ||

    err instanceof mongoose.Error.ParallelSaveError ||

    err instanceof mongoose.Error.ValidatorError

  ) {

    message = Object.values(err.errors).map((value) => value.message);

    statusCode = 422;

  } else if (err.code == 11000) {

    statusCode = 409;

    message = "Some values already exist. Please try with another values.";

  } else if (err.code == "LIMIT_FILE_SIZE") {

    statusCode = 400;

    message = err.message;

  } else if (err.message == "FileFormatError") {

    statusCode = 400;

    message = "Please upload png or jpg image.";

  } else if (err.message == "FileFormatError2") {

    statusCode = 400;

    message = "Please upload zip or rar document.";

  } else if (err.errno == -4058) {

    statusCode = 404;

    message = "Requested file couldn't be found.";

  } else if (err.name == "TokenExpiredError") {

    statusCode = 403;

    message = "JWT token expired";

  } else if (err.name == "JsonWebTokenError") {

    statusCode = 403;

    message = err.message;

  } else if (err instanceof TypeError || err instanceof SyntaxError) {

    statusCode = 500;

    message = "An unexpected error occurred while processing your request.";

  }



  res.status(statusCode).json({ message });

  if (statusCode >= 400) {

    logger.warn(message);

    console.log(err);

  } else {

    logger.error(err);

  }

}



module.exports = apiErrorHandler;