const pool = require("../config/db");

class CourseModel {
  // Создаёт новый курс
  static async createCourse(hero, image, title, description, students_enrolled,
     feedback_rating, plan_id, work_title, work_description) {
    const query = `
      INSERT INTO public.course 
      (hero, image, title, description, students_enrolled, feedback_rating, plan_id, work_title, work_description)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *;
    `;
    const values = [hero, image, title, description, students_enrolled, feedback_rating, plan_id, work_title, work_description];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  // Получает все курсы
  static async getAllCourses() {
    const query = `SELECT * FROM public.course ORDER BY id DESC;`;
    const result = await pool.query(query);
    return result.rows;
  }

    // Привязать курс к преподавателю
    static async assignCourseToTeacher(teacherId, courseId) {
        const query = `
          INSERT INTO teacher_courses (user_id, course_id)
          VALUES ($1, $2)
          ON CONFLICT DO NOTHING;
        `;
        await pool.query(query, [teacherId, courseId]);
      }
    
    
    // Проверка, ведет ли пользователь курс
    static async isTeacherOfCourse(teacherId, courseId) {
        const query = `
            SELECT * FROM teacher_courses 
            WHERE user_id = $1 AND course_id = $2;
        `;
        const result = await pool.query(query, [teacherId, courseId]);
        return result.rows.length > 0;
    }

    static async assignCourseToStudent(studentId, courseId) {
        const query = `
          INSERT INTO user_course_scores (user_id, course_id)
          VALUES ($1, $2)
          ON CONFLICT DO NOTHING;
        `;
        await pool.query(query, [studentId, courseId]);
      }

  // Получает курс по ID
  static async getCourseById(id) {
    const query = `SELECT * FROM public.course WHERE id = $1;`;
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  // Обновляет данные курса
  static async updateCourse(id, hero, image, title, description, students_enrolled,
     feedback_rating, plan_id, work_title, work_description) {
    const query = `
      UPDATE public.course
      SET hero = $1, image = $2, title = $3, description = $4, 
          students_enrolled = $5, feedback_rating = $6, plan_id = $7, 
          work_title = $8, work_description = $9, updated_at = CURRENT_TIMESTAMP
      WHERE id = $10
      RETURNING *;
    `;
    const values = [hero, image, title, description, students_enrolled,
         feedback_rating, plan_id, work_title, work_description, id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  // Удаляет курс
  static async deleteCourse(id) {
    const query = `DELETE FROM public.course WHERE id = $1 RETURNING *;`;
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = CourseModel;
