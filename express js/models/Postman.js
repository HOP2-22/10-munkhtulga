const mongoose = require("mongoose")
const User= require("../models/User")
const Schema= mongoose.Schema
const model= mongoose.model;

const PostSchema = new Schema({
    text: {type:String},
    likes:{type:Number, defauly: 0},
    link:{type:String},
    tags:{type:Array},
    publishDate:{type:Date, default: new Date()},
    owner: User,
});

const Post= model("posts", PostSchema)

module.exports=Post;