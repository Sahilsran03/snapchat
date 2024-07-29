const express = require("express");
const { Schema, default: mongoose } = require("mongoose");
const { type } = require("os");

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    msg: {
        type: String
    },
    created_at: {
        type: Date
    }
})


const chat = mongoose.model("chat", chatSchema);
module.exports = chat;