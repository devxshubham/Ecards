const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Ecard")

const Schema = mongoose.Schema;

const ecardSchema = new Schema({
    name : String,
    description : String,
    socials : {
        twitter : String,
        linkedin : String
    },
    interest : String
})

module.exports.Ecard = mongoose.model('Ecard', ecardSchema)