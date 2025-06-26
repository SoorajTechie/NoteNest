const express = require("express");
const Register = require("../controller/Register");
const Login = require("../controller/Login");
const Logout = require("../controller/Logout");
const Verify = require("../controller/Verify");
const { createNote, getNote, UpdateNote, DeleteNote } = require("../controller/noteControl");

const router = express.Router();

router.post("/register",Register);
router.post("/login",Login);
router.get("/logout",Logout);
router.get("/profile",Verify);


router.post("/create", createNote);
router.get("/get",getNote);
router.put("/update/:id",UpdateNote);
router.delete("/delete/:id",DeleteNote);

module.exports = router