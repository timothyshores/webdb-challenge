const router = require('express').Router();
const Projects = require('./projects-model');

router.post('/', (req, res) => {
    const { name, description } = req.body;
    const message400 = { error: "Please provide name for the project" }
    const message500 = { error: "There was an error while saving the project to the database" };


    if (name && description) {
        Projects.addProject({ name, description, completed: false})
            .then(project => { res.status(201).json(project) })
            .catch(err => { res.status(500).json(message500) })
    }
    else {
        res.status(400).json(message400);
    }
});

module.exports = router;