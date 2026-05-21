import { DataTypes } from 'sequelize';
import sequelize from '../../database/connections/sequelize.js';

const CourseModel = sequelize.define('Course', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
    },
}, {
    tableName: 'courses',
    timestamps: false,
});

export default CourseModel;
