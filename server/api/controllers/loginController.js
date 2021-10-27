const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
const UserDetails = mongoose.model('UserDetails');  

exports.login = (req, res) => {
  try {
    const userName = req.body.uname;
    const password = req.body.pwd;
    UserDetails.find({uname: userName, pwd: password }, (err, stud ) => {
      if (err || stud.length === 0) {
        res.send(err);
      } else {
        var accessToken = jwt.sign({
          data: stud
        }, 'mysecrestcode', { expiresIn: '1h' });
        res.json({
          token: accessToken,
          userInfo: {
            id: stud.id,
            email: stud.email
          }
        });
        //retrun user email nd _id
      }       
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
