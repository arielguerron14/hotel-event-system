module.exports = (req, res, next) => {
    res.success = (data, message = "Success") => {
      res.json({ success: true, message, data });
    };
  
    res.error = (message, status = 400) => {
      res.status(status).json({ success: false, message });
    };
  
    next();
  };
  