// Sequelized response model
module.exports = function(sequelize, DataTypes) {
    var Survey = sequelize.define('Survey', {
        // Set the ID in the DB
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        q1: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q2: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q3: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q4: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q5: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q6: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q7: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q8: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q9: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q10: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q11: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q12: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q13: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q14: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q15: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    // Returns the model
    return Survey;
};
