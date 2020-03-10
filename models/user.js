module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            notNull: true
        },
        email: {
            type:DataTypes.STRING,
            isEmail: true,
        },
        message: {
            type: DataTypes.STRING,
        }

    })
    return(User)
}