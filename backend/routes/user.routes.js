const {Router} = require('express');
const {followCompany} = require('../controllers/user.controller')
const router = Router();

router.post('/follow_company', followCompany);

module.exports = router;