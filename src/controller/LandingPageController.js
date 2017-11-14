var express = require('express');
var router = express.Router();
var data_array = [
    { no: '1' },
    { bg: '/scripts/template/front/revolution/assets/images/lambo.jpg' },
    { bg_thumb: '/scripts/template/front/revolution/assets/images/lambo-100x50.jpg' },
    { img: '/scripts/template/front/revolution/assets/images/macbookpro.png' },
    { title: 'Medipith' },
    { txt1: 'Medipith Hospital Management' },
    { txt2: 'Simple and efficient way to manage your hospital' },
    { link: 'https://google.com' }
];
/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('landing_page', { data: data_array });
    console.log(data);
});

module.exports = router;