let mongoose = require('mongoose');
//creating a note model

let noteModel = mongoose.Schema({
    notename: String,
    date: String,
    description: String,
    additionalnote: String
    },
    {
        collection:"notes"
    }

);
module.exports = mongoose.model('Note', noteModel);

