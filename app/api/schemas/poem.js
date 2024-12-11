const mongoose = require('mongoose');

const poemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Poem = mongoose.model('Poem', poemSchema);

module.exports = Poem;