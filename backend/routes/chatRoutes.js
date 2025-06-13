const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
const { accessChat,fetchChats,createGroupChat, renameGroupChat, addUserToGroup, removeFromGroup } = require("../controllers/chatControllers") ;

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename-group").put(protect, renameGroupChat);
router.route("/add-user-group").put(protect, addUserToGroup);
router.route("/remove-user-group").put(protect, removeFromGroup);

module.exports = router;