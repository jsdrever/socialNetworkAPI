const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction'); //! this is not working HELP

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
      // set default value to current timestamp
      // use a getter method to format the timestamp on query
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
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
