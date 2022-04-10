module.exports = (sequelize, dataTypes) => {
    const alias = "Genre";
    const cols = {
        
    };
    const config = {
        tableName: "genres",
    };

    const Genre = sequelize.define(alias, cols, config)

    return Genre;
}