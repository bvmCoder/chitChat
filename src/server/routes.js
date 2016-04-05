var router = require('express').Router(),
    four0four = require('./utils/404')(),
    data = require('./data');

router.get('/student', getStudent);
router.get('/student/:id', getPerson);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getStudent(req, res, next) {
    res.status(200).send(data.student);
}

function getPerson(req, res, next) {
    var id = +req.params.id;
    var person = data.people.filter(function(p) {
        return p.id === id;
    })[0];

    if (person) {
        res.status(200).send(person);
    } else {
        four0four.send404(req, res, 'person ' + id + ' not found');
    }
}
