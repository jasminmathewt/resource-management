const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserDetailsSchema = new Schema(
  {
    name: {
      type: String,
      required: 'Name cannot be blank'
    },
    email: {
      type: String,
      required: 'Gender cannot be blank'
    },
    uname: {
      type: String,
      required: 'uname cannot be blank'
    },
    pwd: {
      type: String,
      required: 'pwd cannot be blank'
    }
  },
  { collection: 'user_details' }
);
module.exports = mongoose.model('UserDetails', UserDetailsSchema );

