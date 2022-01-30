const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TempleteSchema = new Schema({
    receiver: {
        firstName: {type: String},
        lastName: {type: String},
        email: {type: String},
    },
    price: {type: Number},
    address: {
        country: {type: String},
        city: {type: String},
        street: {type: String},
        coordinates: {
            x: {type: Number},
            y: {type: Number}
        },
        creationDate: {type: Date}
    }
});

const Template = mongoose.model('Template', TempleteSchema);
module.exports = Template;
