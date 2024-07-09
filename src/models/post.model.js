const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    content: String,
    dateCreated: { type: Date, default: Date.now },
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
});

postSchema.methods.remove = function() {
    return this.delete();
};

const Post = mongoose.model('Post', postSchema);

module.exports = Post;