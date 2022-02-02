const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.post("/register", itemController.register);
router.post("/login", itemController.login);
router.post("/post", itemController.post);
router.post("/commits", itemController.commits);
router.post("/searchName", itemController.searchName);
router.get("/searchget", itemController.searchget);
router.delete("/deleteposte/commit", itemController.deleteposte);
router.put("/updateAccunt", itemController.updateAccunt);
router.get("/getcommit", itemController.getcommit);

module.exports = router;
