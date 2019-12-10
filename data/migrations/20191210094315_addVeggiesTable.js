// a migration file describes the changes to apply to the dB

// the up function describes what will be done like a 'commit'
exports.up = function (knex) {
    return knex.schema.createTable('veggies', tbl => {
        tbl.increments('veggie_id');
        tbl.string('name', 255).notNullable().unique().index();
        tbl.boolean('like_it').defaultTo(false);
    })
};

// the down function desribes how to revert or undo the changes, like going back to the last 'commit'
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('veggies');
};
