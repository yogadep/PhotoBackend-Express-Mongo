export const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log stack trace kesalahan untuk debugging

    res.status(err.status || 500).json({
        error: {
            message: 'Terjadi kesalahan server',
            detail: err.message
        },
    });
}