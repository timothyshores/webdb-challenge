const db = require('../data/dbConfig');

module.exports = {
    addProject
};

function addProject(project) {
    return db('projects')
        .insert(project)
        .then(ids => ({ id: ids[0] }));
}
