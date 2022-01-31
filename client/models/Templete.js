const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TempleteSchema = new Schema({
    receiver: {
        firstName: String,
        lastName: String,
        email: String,
    },
    price: {type: Number, default: 0.0, min: 10, max: 200},
    address: {
        country: String,
        city: String,
        street: String,
        coordinates: {
            x: {
                type: Number,
                default: 0.0,
                min: -50,
                max: 50
            },
            y: {
                type: Number,
                default: 0.0,
                min: -25,
                max: 25
            },
        }
    },
    creationDate: Date
});

const Template = mongoose.model('Template', TempleteSchema);
module.exports = Template;
