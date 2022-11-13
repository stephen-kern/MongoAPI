// import the schema constructor and the model function from mongoose
const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true, 
            // validate?
        },
        thoughts: {
            // Arr of _id values refs the Thought model
        },
        friends: {
            // Arr of _id values refs the User model (self-reference)
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

UserSchema.virtual("friendCount").get(function () {
    return this.friends.reduce((total, friends) => total + this.friends.length +1, 0);
});

const User = model("User", UserSchema);

module.exports = User;