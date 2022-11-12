import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    title: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 25
    },
    email: {
        type: String,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    startDate: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Posts', PostSchema)
