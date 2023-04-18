const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId, // use mongoose's objectID data type
      default: () => new Types.ObjectId(), // default value is set to a new objectID
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,


    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now, // Set default value to the current timestamp & Use a getter method to format the timestamp on query
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
