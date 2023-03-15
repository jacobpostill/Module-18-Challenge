const { Schema, model } = require('mongoose');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    published: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    meta: {
      upvotes: Number,
      bookmarks: Number,
    },
    thought: {
      type: String,
      minLength: 15,
      maxLength: 500,
      required: true       
    },
    username: {
      type: String, 
      required: true       
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual('upvoteCount')
  .get(function () {
    return this.meta.upvotes;
  });

const thought = model('thought', thoughtSchema);

module.exports = thought;
