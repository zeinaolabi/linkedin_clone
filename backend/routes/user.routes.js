const {Router} = require('express');
const {followCompany, unfollowCompany} = require('../controllers/user.controller')
const router = Router();

router.post('/follow_company', followCompany);
router.post('/unfollow_company', unfollowCompany);

module.exports = router;