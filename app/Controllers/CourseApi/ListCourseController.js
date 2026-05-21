import CourseModel from '../../Models/CourseModel.js';

export default async function ListCourseController(request, response) {
    try {
        const courses = await CourseModel.findAll();
        return response.json(courses);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'Internal server error' });
    }
}
