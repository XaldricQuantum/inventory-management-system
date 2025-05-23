const errorHandler = (error, req, res) => {
    const statusCode = res.statusCode >= 400 ? res.statusCode : 500;
    res.status(statusCode).json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? null : error.stack,
    });
    log('Error:', error.message);
};

export default errorHandler;