const express = require("express");
const CourseController = require("../controllers/courseController");
const {authMid, verifyCourseOwnership} = require('../middleware/authMiddleware');

const router = express.Router();

router.post("/", authMid, CourseController.createCourse);
router.get("/", CourseController.getAllCourses);
router.get("/:id", CourseController.getCourseById);
router.put("/:id", authMid, verifyCourseOwnership, CourseController.updateCourse);
router.delete("/:id", authMid, verifyCourseOwnership, CourseController.deleteCourse);

module.exports = router;
