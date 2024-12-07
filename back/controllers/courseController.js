const CourseModel = require("../models/courseModel");

class CourseController {
  // Создаёт новый курс
  static async createCourse(req, res) {
    const { hero, image, title, description, students_enrolled, 
        feedback_rating, plan_id, work_title, work_description } = req.body;
        const teacherId = req.user.id;
    

    if (!hero || !image || !title || !description) {
      return res.status(400).json({ message: "Description, image, hero and title are required" });
    }

    try {
      const course = await CourseModel.createCourse(hero, image, title, description, students_enrolled, 
        feedback_rating, plan_id, work_title, work_description);

      await CourseModel.assignCourseToTeacher(teacherId, course.id);

      res.status(201).json(course);
    } catch (error) {
      console.error("Error creating course:", error);
      res.status(500).json({ message: "Server error" });
    }
  }

  // Получает все курсы
  static async getAllCourses(req, res) {
    try {
      const courses = await CourseModel.getAllCourses();
      res.status(200).json(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ message: "Server error" });
    }
  }

  // Получает курс по ID
  static async getCourseById(req, res) {
    const { id } = req.params;

    try {
      const course = await CourseModel.getCourseById(id);
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.status(200).json(course);
    } catch (error) {
      console.error("Error fetching course:", error);
      res.status(500).json({ message: "Server error" });
    }
  }

  // Обновляет курс
  static async updateCourse(req, res) {
    const { id } = req.params;
    const { hero, image, title, description, students_enrolled, feedback_rating, plan_id, work_title, work_description } = req.body;
    const teacherId = req.user.id;

    try {
      const course = await CourseModel.updateCourse(id, hero, image, title, description, students_enrolled, feedback_rating, plan_id, work_title, work_description);

      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }

      // Привязка курса к текущему преподавателю
      await CourseModel.assignCourseToTeacher(teacherId, course.id);

      res.status(200).json(course);
    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ message: "Server error" });
    }
  }

  // Удаляет курс
  static async deleteCourse(req, res) {
    const { id } = req.params;
    const teacherId = req.user.id;

    try {
      const course = await CourseModel.deleteCourse(id);
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      await CourseModel.assignCourseToTeacher(teacherId, course.id);
      res.status(200).json({ message: "Course deleted successfully" });
    } catch (error) {
      console.error("Error deleting course:", error);
      res.status(500).json({ message: "Server error" });
    }
  }

  static async enrollStudent(req, res) {
    const { courseId } = req.params;
    const studentId = req.user.id;
  
    try {
      await CourseModel.assignCourseToStudent(studentId, courseId);
      res.status(200).json({ message: "Successfully enrolled in course" });
    } catch (error) {
      console.error("Error enrolling student:", error);
      res.status(500).json({ message: "Server error" });
    }
  }
}



module.exports = CourseController;
