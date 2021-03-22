/* eslint-disable no-unused-vars */

export const logErrors = (err, req, res, next) => {
    // log error then pass it along
    next(err);
  };
  
  export const clientError = (err, req, res, next) => {
    if (req.xhr) {
      res.status(500).json({ error: 'Something failed!' });
    } else {
      next(err);
    }
  };
  
  export const serverError = (err, req, res, next) => {
    // use a switch case to serve error messages
    res.status(500).json({ error: err.stack });
  };