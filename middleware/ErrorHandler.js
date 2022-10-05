const ErrorHandler = (err, req, res, next) => {
  const error = {};
  if (err.name == "CastError") {
    error.status = 404;
    error.message = "Invalid Resource Id";
  }

  if (err.code == 11000) {
    const duplicate =
      Object.keys(err.keyPattern)[0] === "email_address"
        ? "Email Address"
        : "GR No.";
    error.status = 400;
    error.message = `${duplicate} already exist`;
  }

  if (err.name == "ValidationError") {
    error.status = 400;
    error.message = Object.values(err.errors)
      .map((e) => e.properties.message)
      .reverse();
  }

  res
    .status(error.status || 500)
    .json({ type: "error", message: error.message || "Internal Server Error" });
};

module.exports = ErrorHandler;
