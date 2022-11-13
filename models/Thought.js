const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            // must be between 1-280 chars
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        username: { // the user that created this thought 
            type: String,
            required: true,
        },
        reactions: {
            // array of nested documents created with the reactionsSchema
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        }, 
        id: false,
    }
);

ThoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.reduce((total, reactions) => total + reactions.length +1, 0);
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;