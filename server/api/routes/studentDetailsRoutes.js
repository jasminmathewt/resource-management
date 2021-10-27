const studentController = require('../controllers/studentController');
const loginController = require('../controllers/loginController');
const userController = require('../controllers/userController');
module.exports = app => {
  app
  .route('/login')
  .post(loginController.login);

  app
    .route('/students')
    .get(studentController.list_all_words)
    .post(studentController.createStudent);
  app
    .route('/students/:studId')
    .get(studentController.read_a_word)
    .put(studentController.updateStudentDetails)
    .delete(studentController.delteStudent);
  app
    .route('/studDeatils')
    .get(studentController.studDeatils);

  app
    .route('/user')
    .post(userController.createUser);
};