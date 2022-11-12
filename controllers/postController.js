import PostModel from "../models/Post.js";
import {randomUUID} from "crypto";

export const getAllPosts = async (req, res) => {
    try {
        const posts = await PostModel.find()


        res.json(posts)
    } catch (err) {
        console.log(err)
        res.json('')
    }
}


export const getSinglePost = async (req, res) => {
    try {
        const singlePostById = await PostModel.findById(req.params.postId);
        res.json(singlePostById)
    } catch (err) {
        res.send({status: 400, message: 'Id does not exist'})
    }
}

export const createSinglePost = async (req, res) => {
    const newPost = new PostModel({...req.body, id: randomUUID()});

    try {
        const savedData = await newPost.save()
        res.status(201).json(savedData)
    } catch (err) {
        const errorFields = Object.keys(err.errors || [])

        const errorData = errorFields.reduce((aggr, value) => {
            aggr[value] = err.errors[value].properties.message
            return aggr;
        }, {})

        res.status(400).json({message: errorFields.length === 0 ? "Unique Id failed" : {...errorData}})
    }
}

export const deletePost = async (req, res) => {
    try {
        const deletedPost = await PostModel.remove({_id: req.params.postId})
        res.json(deletedPost)
    } catch (err) {
        res.json({message: err})
    }
}

export const editPost = async (req, res) => {
    try {
        const editedPost = await PostModel.updateOne({_id: req.params.postId}, {$set: {...req.body}});
        res.json(editedPost)
    } catch (err) {
        res.status(400).json({message: err})
    }
}
