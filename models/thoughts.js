const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction'); //! this is not working HELP
const dateFormat = require("../utils/dateFormat");

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId, // Mongoose's ObjectId data type  
      default: () => new Types.ObjectId(), // Default value is set to a new ObjectId
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
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Schema to create thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280, 
      minlength: 1,
    },
    createdAt: {
      // date
      type: Date,
      // set default value to current timestamp
      default: Date.now,
      // use a getter method to format the timestamp on query
      get: (timestamp) => dateFormat(timestamp),
    },
    username: { //the user that created this thought
      type: String,
      required: true,
    },
    reactions: {
        // array of nested documents created with the reactionSchema
    },
    //! Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.


    reactions: [reactionSchema],
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
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
