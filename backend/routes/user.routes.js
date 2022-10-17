const {Router} = require('express');
const {followCompany, unfollowCompany, isFollowedCompany,getUserProfile} = require('../controllers/user.controller')
const router = Router();

router.post('/follow_company', followCompany);
router.post('/unfollow_company', unfollowCompany);
router.post('/is_followed', isFollowedCompany);
// router.post('/is_followed', updateUser);
router.get('/get_profile/:userID', getUserProfile);


module.exports = router;