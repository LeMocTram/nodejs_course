const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete');

const { Schema } = mongoose;

const Course = new Schema(
    {
        name: { type: String, maxLength: 255 },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        videoId: { type: String, maxLength: 255 },
        level: { type: String, maxLength: 255 },
        slug: { type: String, slug: "name", unique: true }

    },
    {
        timestamps: true,
    }
);


//add plugin

mongoose.plugin(slug)

Course.plugin(mongooseDelete, { deleteAt: true, overrideMethods: 'all' })

module.exports = mongoose.model('Course', Course);
