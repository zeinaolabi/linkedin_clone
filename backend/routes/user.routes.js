const {Router} = require('express');
const {followCompany, unfollowCompany, isFollowedCompany} = require('../controllers/user.controller')
const router = Router();

router.post('/follow_company', followCompany);
router.post('/unfollow_company', unfollowCompany);
router.post('/is_followed', isFollowedCompany);

module.exports = router;