const errorHandler = (err,req,res,next)=>{
    res.status(res.statusCode || 404 ).json({
        Message:err.Message,
    })
}

module.exports = errorHandler;