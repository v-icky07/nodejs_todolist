
class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message); //constructor of parent class
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err, req, res, next) => {

    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    return res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
}

export default ErrorHandler;