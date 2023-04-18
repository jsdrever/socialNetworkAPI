const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

  // todo /api/users/:userId/friends/:friendId
  router
    .route('/:users/:userID/friends/:friendID')
    .post() // add a new friend
    .delete() // to remove a friend from a users list
module.exports = router;
