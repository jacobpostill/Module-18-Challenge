const { Schema, model } = require('mongoose');

const friendSchema = new Schema(
 {
  name: { 
    type: String, 
    required: true 
    },
  email: { 
    type: String, 
    required: true, 
    unique: true },
  username: { 
    type: String, 
    required: true },
  age: { 
    type: Number, 
    min: 18 },
  date_created: { 
    type: Date, 
    default: Date.now }
},
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const friend = model('friend', friendSchema);

module.exports = friend;
