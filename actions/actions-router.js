const router = require('express').Router();
const Actions = require('./actions-model');

router.post('/', (req, res) => {
    const { description, project_id } = req.body;
    const message400 = { error: "Please provide a name and description for the action" }
    const message500 = { error: "There was an error while saving the action to the database" };


    if (description && project_id) {
        Actions.addAction({ ...req.body, completed: false })
            .then(project => { res.status(201).json(project) })
            .catch(err => { res.status(500).json(message500) })
    }
    else {
        res.status(400).json(message400);
    }
});

module.exports = router;