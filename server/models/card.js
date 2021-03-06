const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    cardTags: { type: String, required: true, default: "" },
    firstName: { type: String, required: true, default: "" },
    lastName: { type: String, required: false, default: "" },
    companyName: { type: String, required: false, default: "" },
    phoneNumber: { type: String, required: true, default: "" },
    email: { type: String, required: true, default: "" },
    address: { type: String, required: false, default: "" },
    date: { type: Date, default: Date.now },
    img: {
        type: String,
        required: true,
        default: "",
    },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
