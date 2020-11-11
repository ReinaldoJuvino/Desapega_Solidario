module.exports = app => {
    
    app.post('/signup',app.src.api.user.save)
    app.post('/signin',app.src.api.auth.signin)
    app.post('/validatetoken',app.src.api.auth.validateToken)

    app.route('/')
        .get(function (req, res) {
        res.send('Welcome to API DesapegaSolidario');
    });
    app.route('/users')
        //.all(app.src.config.passport.authenticate())
        .post(app.src.api.user.save)
        .get(app.src.api.user.get)

    app.route('/users/:id')
        //.all(app.src.config.passport.authenticate())
        .put(app.src.api.user.save)

    app.route('/item')
        //.all(app.src.config.passport.authenticate())
        .get(app.src.api.item.get)
        .post(app.src.api.item.save)
    app.route('/item/:id')
        //.all(app.src.config.passport.authenticate())
        //.get(app.src.api.item.getById)
        .put(app.src.api.item.save)
    // app.route('/pacient')
    //     .get(app.src.api.pacient.get)
    //     .post(app.src.api.pacient.save)
    // app.route('/pacient/:id')
    //     .put(app.src.api.pacient.save)
    // app.route('/pacient/:id')
    //     .get(app.src.api.pacient.getUserByUserId)

    

}