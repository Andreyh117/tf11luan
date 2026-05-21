import CourseModel from '../../Models/CourseModel.js';

export default async function CreateCourseController(request, response) {
    try {
        const { name } = request.body;

        if (!name) {
            return response.status(400).json({ error: ['name obrigatório!'] });
        }

        const course = await CourseModel.create({ name });
        return response.status(201).json(course);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'Internal server error' });
    }
}
