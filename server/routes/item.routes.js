const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.post("/register", itemController.register);
router.post("/login", itemController.login);
router.post("/post", itemController.post);
router.post("/commits", itemController.commits);
// router.get("",);
// router.delete("",);
// router.put("",);
module.exports = router;
