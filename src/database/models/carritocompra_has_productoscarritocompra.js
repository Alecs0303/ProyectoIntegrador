module.exports = (sequelize, dataTypes) => {
    let alias = 'carritocompra_has_carritocompra';
    let cols = {
        
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'actors'
    }
    const carritocompra_has_carritocompra = sequelize.define(alias, cols, config); 

    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
    carritocompra_has_carritocompra.associate = function (models) {
        carritocompra_has_carritocompra.belongsToMany(models.Movie, {
            as: 'movies',
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id'
        });
    }
 
    return carritocompra_has_carritocompra
};