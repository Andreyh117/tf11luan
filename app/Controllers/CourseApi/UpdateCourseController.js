import CourseModel from '../../Models/CourseModel.js';

export default async function UpdateCourseController(request, response) {
    try {
        const { id } = request.params;
        const { name } = request.body;

        if (!name) {
            return response.status(400).json({ error: 'Name is required' });
        }

        const course = await CourseModel.findByPk(id);

        if (!course) {
            return response.status(404).json({ error: 'Course not found' });
        }

        await course.update({ name });
        return response.json(course);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'Internal server error' });
    }
}
