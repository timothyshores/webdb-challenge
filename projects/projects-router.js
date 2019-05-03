const router = require('express').Router();
const Projects = require('./projects-model');
const Actions = require('../actions/actions-model');

router.get('/:id', (req, res) => {
    const message404 = { error: "The dish with the specified ID does not exist." }
    const message500 = { error: "The dish information could not be retrieved." }

    Projects.getProject(req.params.id)
        .then(project => {
            if (project) {
                Actions.getActions()
                    .then(action => {
                        const actions = action.filter(action => action.project_id == req.params.id);
                        res.status(200).json({ ...project, actions})
                    })
                    .catch(err => {
                        res.status(500).json({ message: 'Unable to get actions' })
                    });
            } else {
                res.status(404).json(message404)
            }
        })
        .catch(err => { res.status(500).json(message500) });
})

router.post('/', (req, res) => {
    const { name, description } = req.body;
    const message400 = { error: "Please provide a name and description for the project" }
    const message500 = { error: "There was an error while saving the project to the database" };


    if (name && description) {
        Projects.addProject({ name, description, completed: false })
            .then(project => { res.status(201).json(project) })
            .catch(err => { res.status(500).json(message500) })
    }
    else {
        res.status(400).json(message400);
    }
});

module.exports = router;