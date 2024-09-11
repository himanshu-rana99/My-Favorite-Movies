const movies = require('./movies');

const constructorMethod = (app) => {
    app.use('/', movies); 

    app.use('*', (req, res) => {
        res.sendStatus(404); 
    }); 
}; 

module.exports = constructorMethod; 