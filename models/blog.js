const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
            required: true
        },
        slug: {
            type: Number,
            unique: true,
        },
        body: {
            type: {},
            required: true,
            min: 200,
            max: 2000000
        },
        excerpt: {
            type: String,
            max: 1000
        },
        mtitle: {
            type: String
        },
        mdesc: {
            type: String
        },
        photo: {
            type: String
        },
        category: {
            type: String
        },
        tags: {
            type: Array,
        },
        //tags: [{ type: ObjectId, ref: 'Tag', required: true }],
        postedBy: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
