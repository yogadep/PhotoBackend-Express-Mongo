export const errorHandler = (err, req, res, next) => {
    // console.error(err.stack); 
    // up
    res.status(err.status || 500).json({
        error: {
            message: 'Terjadi kesalahan server',
            detail: err.message
        },
    });
}