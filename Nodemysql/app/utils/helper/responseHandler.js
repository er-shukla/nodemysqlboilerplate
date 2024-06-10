module.exports = {
    successResponse: (res, message, data, statusCode, status) => {
        console.log(status, res)
        return res.status(statusCode).json({
            status: status,
            message: message,
            data: data
        });
    },

    errorResponse: (res, error) => {
        return res.status(500).json({
            status: false,
            message: "Something Went Wrong...",
            error: error
        });
    },
};
