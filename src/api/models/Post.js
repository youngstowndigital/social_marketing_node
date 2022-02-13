import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    schedule: {
        type: Date,
        required: true
    }
});

const Post = model('post', PostSchema);

export default Post;
