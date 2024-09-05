// class ApiResponse {
//     constructor(statusCode, data, message = "Success") {
//         this.statusCode = statusCode;
//         this.data = data;
//         this.message = message;
//         this.success = statusCode < 400
//     }

//     sendResponse(res) {
//         res.status(this.statusCode).json({
//             success: this.success,
//             message: this.message,
//             data: this.data
//         });
//     }
// }

// export { ApiResponse };



class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse }