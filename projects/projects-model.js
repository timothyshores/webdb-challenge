const db = require('../data/dbConfig');

module.exports = {
    getProject,
    addProject
};

function getProject(id) {
    return db('projects').where({ id }).first();
}

function addProject(project) {
    return db('projects')
        .insert(project)
        .then(ids => ({ id: ids[0] }));
}
