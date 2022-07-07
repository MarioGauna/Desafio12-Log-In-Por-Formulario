const {Router} = require('express');
const router = Router();

router.get('/', async(req, res) => {
    res.render('login.ejs', {status: req.session.login})
})

router.post('/login', async(req, res) => {
    const userName = req.body.name;
    if (userName){
        req.session.login = true;
        req.session.user = userName;
        res.redirect('/productos')
    } else {
        req.session.login = false;
        res.redirect('/')
    }
})

router.get("/logout", (req, res) => {
    let usuario = req.session.user;
	req.session.destroy( (error) => {
        if (error) {
            res.json(error);
        } else {
            res.render('logout.ejs',{status: false,usuario});
        }
    })
});

module.exports = router;