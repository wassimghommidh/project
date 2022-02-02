const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.post("/register", itemController.register);
router.post("/login", itemController.login);
// router.get("",);
// router.delete("",);
// router.put("",);
module.exports = router;
