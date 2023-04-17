const mongoose = require("mongoose");

//Think im good here

const MandoSchema = new mongoose.Schema({
    make: {
        type: String,
        required: [true, "You must enter a Maker"],
        maxlength: [20, "Max length must be less than 20 characters"]
    },
    modelName: {
        type: String,
        required: [true, "You must enter a Model"],
        maxlength: [30, "Model length must be less than 30 characters"]
    },
    year: {
        type: Number,
        required: [false]
    },
    price: {
        type: Number,
        required: [true, "You must enter a price"]
    },
    description: {
        type: String,
        required: [true, "Please describe the instrument"]
    },
    contact: {
        type: String,
        required: [true, "Contact information is required"]
    }

}, { timestamps: true })

const Mando = mongoose.model("Mando", MandoSchema);

module.exports = Mando;