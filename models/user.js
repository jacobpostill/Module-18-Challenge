const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
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
  password: { 
    type: String, 
    required: true },
  age: { 
    type: Number, 
    min: 18 },
  date_created: { type: Date, default: Date.now }
},
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const user = model('user', UserSchema);

module.exports = user;
