const mongoose = require('mongoose');
const { Schema } = mongoose;
const StudentDetailsSchema = new Schema(
  {
    name: {
      type: String,
      required: 'Name cannot be blank'
    },
    gender: {
      type: String,
      required: 'Gender cannot be blank'
    },
    email: {
      type: String,
      required: 'email cannot be blank'
    },
    dob: {
      type: String,
      required: 'dob cannot be blank'
    },
    address: {
      type: String,
      required: 'address cannot be blank'
    }
  },
  { collection: 'student_details' }
);
module.exports = mongoose.model('StudentDetails', StudentDetailsSchema);

