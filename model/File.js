const mongoose = require('mongoose')

const FileSchema = new mongoose.Schema({
    src_path:{
        type: String,
        required: [true, 'Enter a file name'],
        maxlength: 1000
    },
    }, { timestamps: true }
)

module.exports = mongoose.model('File', FileSchema)