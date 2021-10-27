const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
const StudentDetails = mongoose.model('StudentDetails');

exports.list_all_words = (req, res) => {
  StudentDetails.find({}, (err, students) => {
    if (err) res.send(err);
    res.json(students);
  });
};
exports.createStudent = (req, res) => {
  try{
    const newStudent = new StudentDetails(req.body);
    newStudent.save((err, student) => {
      if (err) res.send(err);
      res.json(student);
    });
  }
  catch(error){
    console.log(error);
  }
  
};
exports.read_a_word = (req, res) => {
  StudentDetails.findById(req.params.studentId, (err, student) => {
    if (err) res.send(err);
    res.json(student);
  });
};
exports.updateStudentDetails = (req, res) => {
  try {
    StudentDetails.findOneAndUpdate(
      { _id: req.params.studentId },
      req.body,
      { new: true },
      (err, student) => {
        if (err) res.send(err);
        res.json(student);
      }
    );
  } catch (error) {
    console.log(error)
  }
};
exports.delteStudent = (req, res) => {
  try {
    console.log(req.params.studId);
    StudentDetails.deleteOne({ _id: req.params.studId }, err => {
      if (err) res.send(err);
      res.json({
        message: 'Student successfully deleted',
       _id: req.params.studId
      });
    });
  } catch (error) {
    res.send(error);
  }
  
};
exports.studDeatils = async (req, res) => {
  try {
    console.log(req.headers.authorization.split(' ')[1]);
    const studToken = req.headers.authorization.split(' ')[1];
    const isValid = await jwt.verify(studToken, 'mysecrestcode');    
      //get data from collection and return collection     
      StudentDetails.find({}, (err, students) => {
        if (err) res.send(err);
        res.json(students);
      });   
    
  } catch (error) {
    console.log(error);
    res.send("inetrnal server error");
  }
  
};


