const ProjectController = require ('../controllers/project.controller')


//Think im good here
module.exports = (app) => {
    app.post('/api/sell', ProjectController.addMando)    //Create
    app.get('/api/mando', ProjectController.getAllMando)    //Read
    app.get('/api/mando/:id', ProjectController.getOneMando)    //Read One
    app.put('/api/edit/:id', ProjectController.editMando)    //Update One
    app.delete('/api/mando/:id', ProjectController.deleteMando)    //Delete One
}