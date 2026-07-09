const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/authcontroller.js");

// router.get('/', async (req, res) => {
//   const user = await userCtrl.find(userCtrl)
//   res.json(user);
// });

router.post('/register', userCtrl.register);

module.exports = router;