exports.uploadFile = async(req, res, next)=> {
    try {
        const fileUrl = `/uploads/${req.file.filename}`
        res.status(201).send({
            message: "File uploaded successfully",
            data: fileUrl
        })
    }
    catch (e) {
        next(e)
    }
}